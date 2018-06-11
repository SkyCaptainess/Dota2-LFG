'use strict';
const mongoose = require('mongoose');

const MatchesSchema = mongoose.Schema({
  steamid32: {
    type: String,
    required: true,
    unique: true
  },
  wins: {
    type: Number
  },
  losses: {
    type: Number
  },
  winrate: {
    
  }
});

const Matches = mongoose.model('Matches', MatchesSchema);

module.exports = {
  Matches
};