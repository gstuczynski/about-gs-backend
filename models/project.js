const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  openInModal: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("projects", projectSchema);
