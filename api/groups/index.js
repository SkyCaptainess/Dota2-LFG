'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jsonParser = bodyParser.json();
const {Group} = require('../../models/Group');
const {GroupUser} = require('../../models/GroupUser');
const {validateJWT} = require('../../api/auth');

router.use(jsonParser);
router.use(validateJWT);

router.get('/', (req, res) => {
  Group.find().sort({createdAt: -1})
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
    if(group[k].selected === true) {
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
    res.json(err);
  })
});

router.put('/', (req, res) => {
  if(req.steamid32) {
    if(req.body.steamid32 === req.steamid32) {
      removeUserFromGroup(req.steamid32, true);
    } else {
      removeUserFromGroup(req.steamid32, false);
    }
  } else {
    res.status(401).json({error: 'Not logged in - 404'})
  }
})

const removeUserFromGroup = (steamid32, groupLeader) => {
  let group = {steamid32: steamid32}
  if(!groupLeader) {
    group.steamid32 = {$ne: steamid32}
  }
  /*Finds group where the user is not a group leader, OR group where they are
    and removes them from the slot in the group
    
    Doing this as the leader should transfer leadership to the user in the group
    with longest amount of time in the group, or to a specific user in the group
    if specified
    */
   console.log(group);
  Group.find({steamid32: group.steamid32, $or: [
    {
      'slot0.steamid32': {$eq: steamid32}
    },
    {
      'slot1.steamid32': {$eq: steamid32}
    },
    {
      'slot2.steamid32': {$eq: steamid32}
    },
    {
      'slot3.steamid32': {$eq: steamid32}
    },
    {
      'slot4.steamid32': {$eq: steamid32}
    }
  ]})
  .then(groups => {
    console.log('LENGTH: ' + groups.length);
   
  })
}

module.exports = {router};