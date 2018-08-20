'use strict';
const mongoose = require('mongoose');
const GroupUser = require('./GroupUser');

const GroupSchema = mongoose.Schema({
  steamid32: {
    type: Number,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  mode: {
    type: String,
    required: true,
    validate: {
      validator: validateMode,
      message: 'Mode (game type) validation failed'
    }
  },
  mood: {
    type: String,
    required: true,
    validate: {
      validator: validateMood,
      message: 'Mood (looking for) validation failed'
    }
  },
  region: {
    type: String,
    required: true,
    validate: {
      validator: validateRegion,
      message: 'Region validation failed'
    }
  },
  location: {
    type: String,
    required: true,
    validate: {
      validator: validateState,
      message: 'State validation failed'
    }
  },
  groupAvatar: {
    type: String
  },
  slot0: {
    type: GroupUser,
    required: true
  },
  slot1: {
    type: GroupUser,
    required: true
  },
  slot2: {
    type: GroupUser,
    required: true
  },
  slot3: {
    type: GroupUser,
    required: true
  },
  slot4: {
    type: GroupUser,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
  editedAt: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

function validateState (value) {
  if(value === 'Prefer not to say' || value === 'Not in USA' || value === 'Canada' || value === 'Mexico') {
    return true;
  }
  
  let states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 
  'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 
  'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 
  'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
  
  return states.includes(value);
}

function validateRegion (value) {
  let regions = ['US East', 'US West', 'Peru', 'Chile', 'South America',
  'Europe West', 'Europe East', 'Russia', 'Japan', 'Dubai', 'Australia',
  'South Africa', 'India', 'China UC', 'China UC 2', 'China TC Shanghai',
  'China TC Zhejiang', 'China TC Wuhan'];
  
  return regions.includes(value);
}

function validateMood(value) {
  console.log(value);
  let moods = ['Looking for Friends 😍', "Looking for Teammates 👩‍👩‍👧‍👦",'Winners Only 😎',
  'LGBTQIA 🌈', 'All Random 🎲', 'Crazy Strats 🤪', 'Meta Worship 🤔',
  'Short Games 🏎', 'Marathon Games 😩', 'Whatever 🙄'];
  
  return moods.includes(value);
  
}

function validateMode(value) {
  let modes = [ "All Pick","Turbo", "Single Draft", "Ability Draft", "All Random",
  "Random Draft", "Captains Mode", "Captains Draft", "Least Played",
  "All Random Deathmatch", "RANKED - All Pick", "RANKED - Captains Mode",
  "RANKED - Random Draft", "BP - Ranked Roles", "BP - Mutation" ];
              
  return modes.includes(value);
}

const Group = mongoose.model('Group', GroupSchema);

module.exports = {
  Group
};