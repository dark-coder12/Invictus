const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
    userID: {type: Number, required: true},
    communityID: {type: Number, required: true},
    name: {type: String,required: true},
    icon: {type: String,required: true},
    description: {type:String, required: true},
    date: {type: String, required: true}
});

const Posts = mongoose.model('Posts', PostsSchema, 'Posts');

module.exports = Posts;

