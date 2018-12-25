const verifyToken = require("../utils/authHealper").verifyToken;
const express = require("express");

const aboutGsController = require("../controllers/aboutGs");
const aboutProjectsController = require("../controllers/projects");

const router = express.Router();

router.get("/projects", aboutProjectsController.getAboutProjectsInfo);
router.post(
  "/project-update",
  verifyToken,
  aboutProjectsController.updateProject
);
router.get("/about-gs", aboutGsController.getAboutText);
router.post("/aboutgs-update", verifyToken, aboutGsController.updateAboutText);

module.exports = router;
