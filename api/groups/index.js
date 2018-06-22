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


router.get('/', (req, res) => {
  Group.find().sort({createdAt: -1})
  .then(groups => {
    res.json(groups);
  })
})

module.exports = {router};