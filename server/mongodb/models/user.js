const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  userID: {type: Number, required: true}
});

const User = mongoose.model("User", userSchema);

module.exports = User;