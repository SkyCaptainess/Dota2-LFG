'use strict';
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  steamid: {
    type: String,
    required: true
  },
  personaname: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  avatarmedium: {
    type: String
  },
  avatarfull: {
    type: String
  },
  loccountrycode: {
    type: String
  },
  locstatecode: {
    type: String
  },
  registeredAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

UserSchema.methods.serialize = function () {
  return {
    username: this.personaname,
    registeredAt: this.registeredAt,
    avatar: this.avatar,
    avatarMedium: this.avatarmedium,
    avatarFull: this.avatarfull,
    country: this.loccountrycode,
    state: this.locstatecode
  };
};

const User = mongoose.model('User', UserSchema);

module.exports = {
  User
};