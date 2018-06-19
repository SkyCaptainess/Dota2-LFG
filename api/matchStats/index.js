'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jsonParser = bodyParser.json();
const formParser = bodyParser.urlencoded({extended: false});
const {modes} = require('../../dota/constants');
const {Match} = require('../../models/Match');
console.log(modes);

let balancedArray = [];

Object.keys(modes).forEach(k => {
  console.log(modes[k]);
  if(!modes[k].balanced) {
    delete modes[k];
  } else {
    balancedArray.push(modes[k].id);
  }
});

// Post to register a new user
router.get('/test', (req, res) => {
   let m = {
    count: 0
  };
  Match.aggregate([
    {$match: {game_mode: {$in:balancedArray}}},
    {$group: {
      _id: '$hero_id',
      win: {
        $sum: {$cond: ['$win', 1, 0]}
      },
      loss: {
        $sum: {$cond: ['$win', 0, 1]}
      },
      total: {
        $sum: 1
      }
    }}
  ])
  .then(matches => {
    console.log(matches);
    m.count = matches.length;
    m.matches = matches;
    res.json(m);
  })
});

module.exports = {router};