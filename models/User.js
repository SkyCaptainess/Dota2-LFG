'use strict';
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  registeredAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

UserSchema.methods.serialize = function () {
  return {
    username: this.username,
    registeredAt: this.registeredAt
  };
};

const User = mongoose.model('User', UserSchema);

module.exports = {
  User
};