const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/asset", (req, res) => {
  const file = req.query.file;
  if (!file || !file.length) {
    return res.status(400).send({ message: "file_required" });
  }
  res.sendFile(path.resolve(`assets/${file}`), err => {
    if (err) {
      console.error("couldn't get data: ", err);
      return res.status(500).send({ message: "couldn't get data" });
    }
  });
});

module.exports = router;
