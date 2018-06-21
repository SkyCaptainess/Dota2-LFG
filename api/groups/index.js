'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jsonParser = bodyParser.json();

const {
  modes: modesAll,
  lobby_types: lobby_typesAll
} = require('../../dota/constants');
const {Group} = require('../../models/Group');
const {GroupUser} = require('../../models/GroupUser');

router.use(jsonParser);


console.log(lobby_typesAll);

// Post to create a new group
router.post('/', (req, res) => {
  const steamid32 = 22572901 //get this from req after middleware
  let group = req.body
  group.steamid32 = steamid32;
  group.username = 'Pupper';
  Object.keys(group).forEach((k, i, _group) => {
    if(group[k].selected === true) {
      console.log('HELLO!!!')
      group[k].username = 'Pupper';
      group[k].steamid32 = steamid32;
    }
  })
  console.log(group);
  Group.create(group)
  .then(_group => {
    res.json(_group);
  })
  .catch(err => {
    console.error(err);
  })
});

module.exports = {router};