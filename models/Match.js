'use strict';
const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema({
  steamid32: {
    type: Number,
    required: true,
  },
  match_id: {
    type: Number
  },
  player_slot: {
    type: String
  },
  team: {

  },
  duration: {
    type: Number
  },
  game_mode: {
    type: Number
  },
  lobby_type: {
    type: Number
  },
  hero_id: {
    type: Number
  },
  start_time: {
    type: Number
  },
  version: {
    type: Number
  },
  kills: {
    type: Number
  },
  deaths: {
    type: Number
  },
  assists: {
    type: Number
  },
  skill: {
    type: Number
  },
  leaver_status: {
    type: Number
  },
  party_size: {
    type: Number
  }
  
});

MatchSchema.pre('save', function() {
  if(this.player_slot.length === 1) {
    this.team = 'Radiant';
  } else if (this.player_slot.length === 3) {
    this.team = 'Dire'
  } else {
    this.team = 'error';
  }
});

const Match = mongoose.model('Match', MatchSchema);

module.exports = {
  Match
};