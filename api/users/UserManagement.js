'use strict';

const mongoose = require('mongoose');
const {User} = require('../../models/User');

const UserManagement = {
  findUser: () => {
    User.find({});
  },

  //User is created if it is their first time logging in. This same method
  //will also be used to update the persona -username- (once per day or so).
  createUser: user => {
    let query = user.steamid,
    update = user, //I will use this to update username etc
    options = { upsert: true, new: true, setDefaultsOnInsert: true };

    /*return promise as the page should not be sent until after the user
    is created so that a JWT can be generated*/
    return new Promise((resolve, reject) => {
      User.findOneAndUpdate(query, update, options, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    });
  }
}

module.exports =  UserManagement;
  