const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  image: {
    type: String
  },
  openInModal: {
    type: Boolean,
    required: true
  },
  mobileUrl: {
    type: String
  },
  repos: {
    type: Array
  }
});

module.exports = mongoose.model("projects", projectSchema);
