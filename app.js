const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const config = require("./config");

const app = express();

const url = config.dbUrl;
const dbName = config.dbName;
const colAboutGs = config.colAboutGs;
const colAboutProjects = config.colAboutProjects;
const appPort = config.port;

let mongoClient;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/about-gs", (req, res) => {
  const col = mongoClient.db(dbName).collection(colAboutGs);
  col.find().toArray((err, items) => {
    if (err) {
      res.status(500).send({ message: "couldn't get data" });
      console.error("couldn't get data: ", err);
      return;
    }
    res.send(items[0].content);
  });
});

app.get("/about-projects", (req, res) => {
  const col = mongoClient.db(dbName).collection(colAboutProjects);
  col.find().toArray((err, items) => {
    if (err) {
      res.status(500).send({ message: "couldn't get data" });
      console.error("couldn't get data: ", err);
      return;
    }
    res.send(items);
  });
});

app.get("/asset", (req, res) => {
  const file = req.query.file;
  if (!file || !file.length) {
    res.status(400).send({ message: "file_required" });
    return;
  }
  res.sendFile(`${__dirname}/assets/${file}`, err => {
    if (err) {
      res.status(500).send({ message: "couldn't get data" });
      console.error("couldn't get data: ", err);
    }
  });
});

MongoClient.connect(
  url,
  (err, client) => {
    if (err) {
      console.error("couldn't connect to database: ", err);
      process.exit(1);
    } else {
      mongoClient = client;

      app.listen(appPort, () => console.log(`listening on port ${appPort}`));
    }
  }
);
