const express = require("express");
const nodemailer = require("nodemailer");
const secretConfig = require("../secret_config");
const _ = require("underscore");

let transporter = nodemailer.createTransport(secretConfig.transporterConfig);

const router = express.Router();

router.post("/sendFeedback", (req, res) => {
  let mailOptions = _.extend(secretConfig.mailOptions, {
    html: req.body.feedbackText
  });
  transporter
    .sendMail(mailOptions)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
