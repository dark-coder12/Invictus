const mongoose = require('mongoose');

const userConnectionsSchema = new mongoose.Schema({
    followedID: {type: Number,required: true}, // id of those whom a user follows
    followerID: {type: Number,required: true},
});

const UserConnections = mongoose.model('UserConnections', userConnectionsSchema, 'userConnections');

module.exports = UserConnections;

