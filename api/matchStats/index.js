'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jsonParser = bodyParser.json();
const formParser = bodyParser.urlencoded({extended: false});
const {
  modes: modesAll,
  lobby_types: lobby_typesAll
} = require('../../dota/constants');
const {Match} = require('../../models/Match');

//very inefficient way of making a deep copy so that I can modify without affecting the imported objects
let modes = JSON.parse(JSON.stringify(modesAll));
let lobby_types = JSON.parse(JSON.stringify(lobby_typesAll));

let balancedModes = [];
let balancedLobbyTypes = [];

Object.keys(modes).forEach(k => {
  if(!modes[k].balanced) {
    delete modes[k];
  } else {
    balancedModes.push(modes[k].id);
  }
});

Object.keys(lobby_types).forEach(k => {
  if(!lobby_types[k].balanced) {
    delete lobby_types[k];
  } else {
    balancedLobbyTypes.push(lobby_types[k].id);
  }
});

console.log(lobby_typesAll);

// Post to register a new user
router.get('/test', (req, res) => {
   let m = {
    count: 0
  };
  Match.aggregate([
    {$match: 
      {game_mode: {$in:balancedModes},
       lobby_type: {$in:balancedLobbyTypes}  
      },
    },
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