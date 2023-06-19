const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  orderDetails: {
    type: Array,
    required: true,
    default: [],
  },
});

module.exports = mongoose.model("users", userSchema);
