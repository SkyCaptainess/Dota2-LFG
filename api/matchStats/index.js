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

// Post to register a new user
router.get('/test', (req, res) => {
   let m = {
    count: 0
  };
//   const OD = require ('./../../dota/opendota');

//   OD.getMatches(22572901)
//   .then(ms => {
//     ms = JSON.parse(ms);
//     ms = ms.map(mt => {
//       if(mt.hero_id === 6) {
//         return mt.match_id
//       }
//     })
    
//     ms = ms.filter(mt => {
//       if(mt) {
//         return mt
//       }
//     })
//     return ms;
//   })
//   .then(ms => {
//     Match.find({hero_id: 6, game_mode: {$in: balancedModes}}).distinct('match_id')
//     .then(mm => {
//       console.log(mm.length, ms.length)
//       let array3 = mm.filter(function(obj) { return ms.indexOf(obj) == -1; });
//       res.json(array3);
//     })
//   })
// })
  
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
})

module.exports = {router};