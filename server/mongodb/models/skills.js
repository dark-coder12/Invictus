const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
    userID: {type: Number, required: true},
    phdDegree: {type: String, required: false},
    phdInstitute: {type: String, required: false},
    mastersDegree: {type: String, required: false},
    mastersInstitute: {type: String, required: false},
    bachelorsDegree: {type: String, required: false},
    bachelorsInstitute: {type: String, required: false},
    skills: {type: [String], required: false}
});

const Skills = mongoose.model("Skills", skillsSchema);

module.exports = Skills;
