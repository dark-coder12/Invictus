const mongoose = require('mongoose');

const MeetupInfoSchema = new mongoose.Schema({
    name: String,
    details: String,
    imgUrl: String,
    whoisitfor: String,
    prequisites: String,
    speakers: String,
    tags: [String],
    attending:[String],
});

const MeetupInfo= mongoose.model('MeetupInfo', MeetupInfoSchema);
module.exports = MeetupInfo;