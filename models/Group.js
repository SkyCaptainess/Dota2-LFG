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
    required: true
  },
  mood: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  location: {
    type: String,
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
  
}

function validateMood(value) {
  
}

function validateMode(value) {
  
}

const Group = mongoose.model('Group', GroupSchema);

module.exports = {
  Group
};