'use strict';
const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema({
  steamid32: {
    type: String,
    required: true,
  },
  match_id: {
    type: String
  },
  player_slot: {
    type: String
  },
  duration: {
    type: Number
  },
  game_mode: {
    type: Number
  },
  lobby_type: {
    type: Number
  }
  
});

const Matches = mongoose.model('Match', MatchesSchema);

module.exports = {
  Match
};