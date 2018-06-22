'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const createToken = steamid32 => {
  const token = jwt.sign({steamid32}, process.env.SECRET, {
          expiresIn: '30 days'// expires in 24 hours
        });
  return token;
}

const validateJWT = (req, res, next) => {
  console.log(req.cookies.token.token);
  const verified = jwt.verify(req.cookies.token.token, process.env.SECRET, (err, decoded) => {
    if(err) {
      console.error(err);
    } else {
      req.username = decoded.username;
      req.steamid32 = decoded.steamid32;
      req.avatarFull = decoded.avatarFull;
      req.avatarMedium = decoded.avatarMedium;
      console.log(decoded);
    }
  });

  next();
}

module.exports = {validateJWT};