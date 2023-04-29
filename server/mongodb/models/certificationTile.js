const mongoose = require("mongoose");

const certificationTileSchema = new mongoose.Schema({
    title: {type: String, required: true},
    mcq: {type: Number, required: true},
    description: {type: String, required: true},
    bg: {type: String, required: true},
});
  
const CertificationTile = mongoose.model('CertificationTile', certificationTileSchema, 'certificationTile');

module.exports = CertificationTile;