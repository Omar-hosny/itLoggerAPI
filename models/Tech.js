const mongoose = require("mongoose");

const TechSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required.."]
  },
  lastName: {
    type: String,
    required: [true, "last name is required.."]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("techs", TechSchema);
