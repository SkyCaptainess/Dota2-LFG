'use strict';
const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema({
  steamid32: {
    type: String,
    required: true,
  },
  match_id: {
    type: Number
  },
  player_slot: {
    type: Number
  },
  team: {
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
  },
  radiant_win: {
    type: Boolean
  },
  win: {
    type: Boolean
  }
  
});

MatchSchema.pre('save', function(next) {
  if(this.player_slot < 128) {
    this.team = 'Radiant';
    if(this.radiant_win) {
      this.win = true;
    } else {
      this.win = false;
    }
  } else if (this.player_slot > 127 ) {
    this.team = 'Dire'
    if(this.radiant_win) {
      this.win = false;
    } else {
      this.win = true;
    }
  } else {
    this.team = 'error';
    this.win = 'error';
  }
  next();
});

MatchSchema.methods.serialize = function() {
  return {
    win: this.win,
    radiant_win: this.radiant_win,
    hero_id: this.hero_id,
    team: this.team
  }
}

const Match = mongoose.model('Match', MatchSchema);

module.exports = {
  Match
};