const About = require("../models/about");

exports.getAboutText = (req, res) => {
  About.find()
    .then(about => {
      res.send(about);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.updateAboutText = (req, res) => {
  console.log(req.body);
  const { text } = req.body;
  About.findOne()
    .then(about => {
      about.text = text;
      return about.save();
    })
    .then(result => {
      res.send(200);
      console.log("UPDATED TEXT!");
    })
    .catch(err => console.log(err));
};
