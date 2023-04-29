const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  topicName: {
    type: String,
    required: true
  },
  topicDescription: {
    type: String,
    required: true
  }
});

const TopicOfTheDay = mongoose.model('TopicOfTheDay', topicSchema, 'topicOfTheDay');

module.exports = TopicOfTheDay;
