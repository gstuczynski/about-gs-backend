const Project = require("../models/project");

exports.getAboutProjectsInfo = (req, res) => {
  // new Project({
  //   text: "dupa",
  //   url: "dupasadasdas",
  //   image: "xxx",
  //   openInModal: true
  // }).save();
  Project.find()
    .then(projects => {
      res.send(projects);
    })
    .catch(err => {
      console.log(err);
    });
};
