const mongoose = require("mongoose");

const LogSchema = mongoose.Schema({
  tech: {
    type: String,
    required: [true, "Please enter tech name!"]
  },
  message: {
    type: String,
    required: [true, "Please enter your message!"]
  },
  attention: {
    type: Boolean
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("logs", LogSchema);
