const mongoose = require('mongoose');
const User = require('../../models/User');

const UserManagement = {
  createUser: user => {
    let query = {user},
    update = {}, //I will use this to update username etc
    options = { upsert: true, new: true, setDefaultsOnInsert: true };

// Find the document
    User.findOneAndUpdate(query, update, options, (err, result) => {
      if (err) {
        return;
      }
      return result;
    })
  }
}

module.exports =  UserManagement;
  