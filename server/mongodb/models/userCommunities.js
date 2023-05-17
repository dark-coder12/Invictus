const mongoose = require('mongoose');

const userCommunitiesSchema = new mongoose.Schema({
  communityID: {type: Number,required: true},
  userID: {type: Number,required: true},
  title: {type: String, required: true},
  bg: {type: String, required: true}
});

const UserCommunities = mongoose.model('UserCommunities', userCommunitiesSchema, 'userCommunities');

module.exports = UserCommunities;

