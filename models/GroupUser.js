const mongoose = require('mongoose');

const GroupUserSchema = mongoose.Schema({
  steamid32: {
    type: Number,
    unique: true
  },
  username: {
    type: String
  },
  hero_id: {
    type: Number
  }
})

const GroupUser = mongoose.model('GroupUser', GroupUserSchema);

export default {
  GroupUser
}