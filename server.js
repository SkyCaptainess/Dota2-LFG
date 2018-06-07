'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const SteamStrategy = require('passport-steam');
const passport = require('passport');
const {router: usersRouter} = require('./api/users/router');
const UserManagement = require('./api/users/UserManagement');
const User = require('./models/User');
const SteamID = require('steamid');
const {
  PORT,
  DATABASE_URL
} = require('./config');

mongoose.Promise = global.Promise;

//steam strategy from passport-steam to save time creating my own
//OpenID implementation
passport.use(new SteamStrategy({
    //I have env variables on c9.io, my home desktop, and on heroku
    returnURL: `${process.env.REALM}/auth/steam/return`,
    realm: process.env.REALM,
    apiKey: process.env.DOTA2_API_KEY
}, (identifier, profile, done) => {
  profile.identifier = identifier;
  return done(null, profile);
}));

// Logging
app.use(morgan('common'));

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

//Steam OpenID is kicked off here. On the client, this will be
//called when the user clicks the steam login button, redirecting them
//to steamcommunity.com
app.get('/auth/steam',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/auth/steam/return');
  });
  
app.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/', session: false }),
  function(req, res) {
    let user = req.user._json;
    //Since JavaScript does not support 64 bit integers, I found a
    //module on npm that converts the Steam64 ID to Steam32 ID, which 
    //is required for the Dota 2 API.
    let sid = new SteamID(user.steamid);
    user.steamid32 = sid.accountid;
    UserManagement.createUser(req.user._json)
    .then(result => {
      res.json(result.serialize());
    })
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
    })
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

//This allows for testing to be easily implemented
if (require.main === module) {
  console.log(DATABASE_URL);
  runServer(DATABASE_URL, PORT).catch(err => console.error(err));
}

module.exports = {
  app,
  runServer,
  closeServer
};