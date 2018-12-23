const path = require("path");
const express = require("express");

const aboutGsController = require("../controllers/aboutGs");
const aboutProjectsController = require("../controllers/projects");

const router = express.Router();

router.get("/about-gs", aboutGsController.getAboutGsInfo);
router.get("/projects", aboutProjectsController.getAboutProjectsInfo);

module.exports = router;
