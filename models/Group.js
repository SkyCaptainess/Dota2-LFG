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
  region: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  micRequired: {
    type: Boolean,
    required: true
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

const Group = mongoose.model('Group', GroupSchema);

module.exports = {
  Group
};