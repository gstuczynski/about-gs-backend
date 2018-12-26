const homeContent = require("../models/homeContent");

exports.getHomeContent = (req, res) => {
  homeContent
    .find()
    .then(content => {
      res.send(content);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.updateHomeContent = (req, res) => {
  const { text } = req.body;
  homeContent
    .findOne()
    .then(content => {
      content.text = text;
      return content.save();
    })
    .then(result => {
      res.status(200).send('updated');
    })
    .catch(err => console.log(err));
};
