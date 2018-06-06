'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const SteamStrategy = require('passport-steam');
const passport = require('passport');
const {router: usersRouter} = require('./api/users/router');
const UserManagement = require('./api/users/ManageUsers');
mongoose.Promise = global.Promise;

passport.use(new SteamStrategy({
    returnURL: 'https://dota2lfg-flooyd.c9users.io:8080/auth/steam/return',
    realm: 'https://dota2lfg-flooyd.c9users.io:8080/',
    apiKey: process.env.DOTA2_API_KEY
}, (identifier, profile, done) => {
  profile.identifier = identifier;
  return done(null, profile);
}));

const {
  PORT,
  DATABASE_URL
} = require('./config');

// Logging
app.use(morgan('common'));
app.set('view engine', 'ejs');

// CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  if (req.method === 'OPTIONS') {
    return res.send(204);
  }
  next();
});


app.use(passport.initialize());
app.use(express.static('public'));
app.use('/api/users/', usersRouter);

app.get('/auth/steam',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/auth/steam/return');
  });
  
app.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/', session: false }),
  function(req, res) {
    //UserManagement.createUser(req.user);
    console.log(req.user._json);
    res.json({"auth": "true"})
  });

let server;

function runServer(dbUrl, port) {
  return new Promise((resolve, reject) => {
    mongoose.connect(dbUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app
        .listen(port, () => {
          console.log(`Your app is listening on port ${port}`);
          resolve();
        })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer(DATABASE_URL, PORT).catch(err => console.error(err));
}

module.exports = {
  app,
  runServer,
  closeServer
};