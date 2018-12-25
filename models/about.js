const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const aboutSchema = new Schema({
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("about", aboutSchema);
