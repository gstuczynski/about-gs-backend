const express = require("express");

const router = express.Router();

router.get("/home", (req, res) => {
  const homeText = "dddd"; // content.home;
  res.send(homeText);
});

module.exports = router;
