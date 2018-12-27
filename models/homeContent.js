const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HomeContentSchema = new Schema({
  welcomeText: {
    type: String
  },
  feedbackText: {
    type: String
  }
});

module.exports = mongoose.model("home-content", HomeContentSchema);
