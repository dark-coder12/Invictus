const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  name: { type: String, required: true },
  icon: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
});

const Like = mongoose.model('Like', LikeSchema);


module.exports = Like;