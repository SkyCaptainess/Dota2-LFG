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
    const query = user.steamid
    const update = user //I will use this to update username etc
    const options = { upsert: true, new: false, setDefaultsOnInsert: true };

    /*return promise as the page should not be sent until after the user
    is created so that a JWT can be generated*/
    return new Promise((resolve, reject) => {
      User.findOneAndUpdate(query, update, options, (err, result) => {
        if (err) {
          reject(err);
        } else {
          /*update/insert successful. With option new set to false, if it is the first
          time a user has logged in, the original document will be null, so I return the
          user showing that it has just been created. If the user is revisiting, the original document
          will be returned. This is necessary to know whether I should queue the initial API calls
          for the user (match history)*/
          if(result) {
            resolve(result);
          } else {
            resolve({
              username: user.personaname,
              registeredAt: user.registeredAt,
              avatar: user.avatar,
              avatarMedium: user.avatarmedium,
              avatarFull: user.avatarfull,
              country: user.loccountrycode,
              state: user.locstatecode,
              steamid32: user.steamid32,
              created: true
            })
          }
        }
      })
    });
  }
}

module.exports =  UserManagement;
  