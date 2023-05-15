var mongoose = require('mongoose');

var MeetupSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: String,
    time: String,
    location: String,
    image: String,
    attending: Number,
    conductedBy: String,
});

const Meetup= mongoose.model('Meetup', MeetupSchema);

module.exports = Meetup;
