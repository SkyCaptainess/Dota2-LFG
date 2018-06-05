'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');

mongoose.Promise = global.Promise;

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



app.use(express.static('public'));
//app.use('/api/users/', usersRouter);
console.log(process.env.DOTA2_API_KEY);

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