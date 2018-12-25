const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");

const app = express();
const sessionStore = new MongoDBStore({
  uri: `${config.dbUrl}/${config.dbName}`,
  collection: "sessions"
});
const appPort = config.port;

const homeRouter = require("./routes/home");
const infoRouter = require("./routes/info");
const assetsRouter = require("./routes/assets");
const feedbackRouter = require("./routes/feedback");
const authRouter = require("./routes/auth");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "test secret",
    resave: false,
    saveUninitialized: false,
    store: sessionStore
  })
);

app.use(homeRouter);
app.use("/info", infoRouter);
app.use(assetsRouter);
app.use(feedbackRouter);
app.use("/auth", authRouter);

mongoose
  .connect(`${config.dbUrl}/${config.dbName}`)
  .then(result => {
    app.listen(appPort);
  })
  .catch(err => {
    console.log(err);
  });
