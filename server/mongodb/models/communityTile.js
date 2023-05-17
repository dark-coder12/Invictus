const mongoose = require("mongoose");

const communityTileSchema = new mongoose.Schema({
   
    title: {type: String, required: true},
    members: {type: Number, required: true},
    description: {type: String, required: true},
    bg: {type: String, required: true},
});
  
const CommunityTile = mongoose.model('CommunityTile', communityTileSchema, 'communityTile');

module.exports = CommunityTile;