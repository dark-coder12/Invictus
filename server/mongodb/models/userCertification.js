const mongoose = require('mongoose');

const userCertificationsSchema = new mongoose.Schema({
  userID: {
    type: Number,
    required: true
  },
  certificationName: {
    type: String,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  }
});

const UserCertification = mongoose.model('UserCertifications', userCertificationsSchema, 
'userCertification');

module.exports = UserCertification;

