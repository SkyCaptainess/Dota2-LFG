'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const {User} = require('../../models/User');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../../config');
const jsonParser = bodyParser.json();
const formParser = bodyParser.urlencoded({extended: false});

const createAuthToken = function(user) {
  return jwt.sign({user}, config.JWT_SECRET, {
    subject: user.username,
    expiresIn: config.JWT_EXPIRY,
    algorithm: 'HS256'
  });
};


// Post to register a new user
router.post('/',  (req, res) => {

});

router.get('/', (req, res) => {
  return User.find()
    .then(users => res.json(users.map(user => user.serialize())))
    .catch(err => res.status(500).json({message: 'Internal server error'}));
});

module.exports = {router};