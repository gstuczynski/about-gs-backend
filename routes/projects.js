const express = require("express");
const getDb = require("../utils/database").getDb;
const colName = require("../config").colAboutProjects;

const router = express.Router();

router.get("/about-projects", (req, res) => {
  const col = getDb().collection(colName);
  col.find().toArray((err, items) => {
    if (err) {
      res.status(500).send({ message: "couldn't get data" });
      console.error("couldn't get data: ", err);
      return;
    }
    res.send(items);
  });
});

module.exports = router;
