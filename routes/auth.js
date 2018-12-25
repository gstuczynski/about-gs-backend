const express = require("express");
const verifyToken = require("../utils/authHealper").verifyToken;

const router = express.Router();

const authController = require("../controllers/auth");

router.get("/duposer", authController.duposer);
router.post("/login", authController.postLogin);
router.post("/logout", authController.postLogout);
router.post("/verify-token", verifyToken);

module.exports = router;
