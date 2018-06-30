'use strict';
const mongoose = require('mongoose');

const DreamTeamSchema = mongoose.Schema({
  steamid32: {
    type: Number,
    required: true
  },
  heroes: [{
    hero_id: {type: Number}
  }]
});

const DreamTeam = mongoose.model('DreamTeam', DreamTeamSchema);

module.exports = {
  DreamTeam
};