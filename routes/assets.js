const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/asset", (req, res) => {
  const file = req.query.file;
  if (!file || !file.length) {
    res.status(400).send({ message: "file_required" });
    return;
  }
  res.sendFile(path.resolve(`assets/${file}`), err => {
    if (err) {
      res.status(500).send({ message: "couldn't get data" });
      console.error("couldn't get data: ", err);
    }
  });
});

module.exports = router;
