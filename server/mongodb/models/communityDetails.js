const mongoose = require("mongoose");

const communityDetailsSchema = new mongoose.Schema({
   
    id: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    bg: {type: String, required: true},
});
  
const CommunityDetails = mongoose.model('CommunityDetails', communityDetailsSchema, 'communityDetails');

module.exports = CommunityDetails;