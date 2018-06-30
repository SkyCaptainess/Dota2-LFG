'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jsonParser = bodyParser.json();
const {
  Group
} = require('../../models/Group');
const {
  GroupUser
} = require('../../models/GroupUser');
const {
  validateJWT
} = require('../../api/auth');

router.use(jsonParser);
router.use(validateJWT);

router.get('/', (req, res) => {
  Group.find().sort({
      createdAt: -1
    })
    .then(groups => {
      res.json(groups);
    })
});

// Post to create a new group
router.post('/', (req, res) => {
  const steamid32 = req.steamid32;
  const username = req.username;

  let group = req.body
  group.steamid32 = steamid32;
  group.username = username;
  group.createdAt = Date.now();
  group.groupAvatar = req.avatarFull;

  Object.keys(group).forEach((k, i, _group) => {
    if (group[k].selected === true) {
      group[k].username = username;
      group[k].steamid32 = steamid32;
    }
  });

  Group.create(group)
    .then(_group => {
      res.json(_group);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    })
});

router.delete('/', (req, res) => {
  
})

router.put('/editinfo', (req, res) => {
  
})

router.put('/', (req, res) => {
  console.log(req.body);
  if (req.steamid32) {
    if (req.body.steamid32 === req.steamid32) {
      removeUserFromGroup(req.steamid32, true)
        .then(group => {
          updateGroup(req.body.steamid32, req.steamid32, req.username, req.body.slot_number)
            .then(updatedGroup => {
              res.status(200).json(updatedGroup);
            })
            .catch(err => {
              console.log(err);
            })
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      removeUserFromGroup(req.steamid32, false)
        .then(group => {
          updateGroup(req.body.steamid32, req.steamid32, req.username, req.body.slot_number)
            .then(updatedGroup => {
              res.status(200).json(updatedGroup);
            })
            .catch(err => {
              console.log(err);
            })
        })
        .catch(err => {
          console.log(err);
        })
    }
  } else {
    res.status(401).json({
      error: 'Not logged in - 404'
    })
  }
})

const updateGroup = (groupSteamid32, userSteamid32, username, slotNumber) => {
  return new Promise((resolve, reject) => {
    let slot = `slot${slotNumber}`;
    let update = {
      [`${slot}.steamid32`]: userSteamid32,
      [`${slot}.username`]: username,
      [`${slot}.selected`]: true
    }


    Group.findOneAndUpdate({
        steamid32: groupSteamid32
      }, update, {
        new: true
      })
      .then(_group => {
        resolve(_group);
      })
      .catch(err => {
        reject(err);
      })
  })
}

const removeUserFromGroup = (steamid32, groupLeader) => {
  return new Promise((resolve, reject) => {
    let group = {
      steamid32: steamid32
    }
    if (!groupLeader) {
      group.steamid32 = {
        $ne: steamid32
      }
    }
    /*Finds group where the user is not a group leader, OR group where they are
      and removes them from the slot in the group
      */
    Group.find({
        steamid32: group.steamid32,
        $or: [{
            'slot0.steamid32': {
              $eq: steamid32
            }
          },
          {
            'slot1.steamid32': {
              $eq: steamid32
            }
          },
          {
            'slot2.steamid32': {
              $eq: steamid32
            }
          },
          {
            'slot3.steamid32': {
              $eq: steamid32
            }
          },
          {
            'slot4.steamid32': {
              $eq: steamid32
            }
          }
        ]
      })
      .then(_group => {
        group = _group[0]._doc;

        Object.keys(group).forEach(k => {
          if (group[k].steamid32 === steamid32) {
            group[k].steamid32 = null;
            group[k].selected = false;
            group[k].username = null;
          }
        })

        Group.update({
            steamid32: group.steamid32
          }, group)
          .then(_group => {
            resolve(group._id);
          })
          .catch(err => {
            reject(err);
          })
      })
      .catch(err => {
        resolve();
      })
  })
}

module.exports = {
  router
};