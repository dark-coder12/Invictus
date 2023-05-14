const mongoose = require("mongoose");

const certificationDetailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      currentlyAttempted: {
        type: Number,
        required: true
      },
      certificationBenefits: {
        type: [String],
        required: true
      },
      id: {
        type: Number,
        required: true,
        unique: true
      },
      bg: {
        type: String,
        required: true
      },
});
  
const CertificationDetail = mongoose.model('CertificationDetail', certificationDetailSchema, 'certificationDetail');

module.exports = CertificationDetail
