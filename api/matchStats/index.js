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
const {
  validateJWT
} = require('./../auth');

/*make copies so imported originals are not modified and can be used for different queries.
These are the "balanced" modes and lobby types, aka those that factor into Valve's ranking system*/
let modes = Object.assign({}, modesAll);
let lobby_types = Object.assign({}, lobby_typesAll);

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

/* Gets top 3 heroes by games played. Might expand upon this later to give more options
   based on query params */
router.get('/top3heroes/totalgames', validateJWT,  (req, res) => {
  if(!req.steamid32) {
    return res.status(401).json({
      error: 'Not authorized'
    })
  }
  Match.aggregate([
    {$match: 
      {game_mode: {$in:balancedModes},
      lobby_type: {$in:balancedLobbyTypes},
      steamid32: req.steamid32  
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
    }},
    { $sort : { total: -1} },
    { $limit: 3}
  ])
  .then(stats => {
    res.json(stats);
  })
})

module.exports = {router};