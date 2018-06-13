'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const passport = require('passport');
const UserManagement = require('../../api/users/UserManagement');
const SteamID = require('steamid');
const jwt = require('jsonwebtoken');
const OD = require('../../dota/opendota');
const {Match} = require('../../models/Match')

const createToken = steamid32 => {
  const token = jwt.sign({steamid32}, process.env.SECRET, {
          expiresIn: '30 days'// expires in 24 hours
        });
  return token;
}

const getExpiryDate = () => {
  let expiryDate = new Date();
  expiryDate.setMonth(expiryDate.getMonth() + 1);
  return expiryDate;
}

//redirect from proxy to react
const setCookiesAndRedirect = (res, result) => {
  console.log(process.env.STEAM_RETURN)
          let token = createToken(result.steamid32);
          res.cookie('token', {token}, { expires: getExpiryDate(), httpOnly: true});
          res.cookie('user', JSON.stringify(result), { expires: getExpiryDate()});
          res.redirect(process.env.STEAM_RETURN);
}


//Steam OpenID is kicked off here. On the client, this will be
//called when the user clicks the steam login button, redirecting them
//to steamcommunity.com
router.get('/',
  passport.authenticate('steam', {
    failureRedirect: '/'
  }),
  function (req, res) {
    res.redirect('/auth/steam/return');
  });

router.get('/return',
  passport.authenticate('steam', {
    failureRedirect: '/',
    session: false
  }),
  function (req, res) {
    console.log('helllloooo');
    let user = req.user._json;
    //Since JavaScript does not support 64 bit integers, I found a
    //module on npm that converts the Steam64 ID to Steam32 ID, which 
    //is required for the Dota 2 API.
    let sid = new SteamID(user.steamid);
    user.steamid32 = sid.accountid;
    UserManagement.createUser(req.user._json)
      .then(result => {
        /*check UserManagement.js. Need to know if it is user's first time visiting so that I can make
        the initial api calls */
        if (result.created) {
          OD.getMatches(result.steamid32)
          .then(matches => {
            matches = JSON.parse(matches);
            matches.forEach(m => m.steamid32 = result.steamid32);
            Match.insertMany(matches)
            .then(matches => {
              setCookiesAndRedirect(res,result);
            })
          });
        } else {
          setCookiesAndRedirect(res, result);
        }
      })
  });

module.exports = {router};