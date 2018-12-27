const Project = require("../models/project");

exports.getAboutProjectsInfo = (req, res) => {
  Project.find()
    .then(projects => {
      res.send(projects);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.updateProject = (req, res) => {
  console.log(req.body);
  const { id, text, url, image, openInModal, mobileUrl } = req.body;
  Project.findById(id)
    .then(project => {
      project.text = text;
      project.url = url;
      project.image = image;
      project.openInModal = openInModal;
      project.mobileUrl = mobileUrl;
      return project.save();
    })
    .then(result => {
      res.send(200);
      console.log("UPDATED PRODUCT!");
    })
    .catch(err => console.log(err));
};
