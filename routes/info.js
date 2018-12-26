const verifyToken = require("../utils/authHealper").verifyToken;
const express = require("express");

const aboutGsController = require("../controllers/aboutGs");
const aboutProjectsController = require("../controllers/projects");
const homeContentController = require("../controllers/home");

const router = express.Router();

router.get("/projects", aboutProjectsController.getAboutProjectsInfo);
router.post(
  "/project-update",
  verifyToken,
  aboutProjectsController.updateProject
);

router.get("/about-gs", aboutGsController.getAboutText);
router.post("/aboutgs-update", verifyToken, aboutGsController.updateAboutText);

router.get("/home-content", homeContentController.getHomeContent);
router.post(
  "/home-content-update",
  verifyToken,
  homeContentController.updateHomeContent
);

module.exports = router;
