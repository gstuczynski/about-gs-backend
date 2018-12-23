const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth");

router.get("/duposer", authController.duposer);
router.post("/login", authController.postLogin);
router.post("/logout", authController.postLogout);

module.exports = router;
