const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
    userID: {type: Number, required: true},
    userDescription: {type: String, required: false},
    userBlogs: [{
        blogName: {type: String, required: true},
        imgUrl: {type: String, required: true},
        date:{type:String,required:true},
        description: {type: String, required: true},
        likedBy:{type:Array,required:false},
    }]
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;