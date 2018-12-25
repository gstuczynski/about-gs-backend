const bcrypt = require("bcryptjs");
const User = require("../models/user");
const getToken = require("../utils/authHealper").getToken;

exports.duposer = (req, res) => {
  bcrypt.hash("test", 12).then(hashedPass => {
    const user = new User({
      email: "stuczynski.g@gmail.com",
      password: hashedPass
    });
    return user.save();
  });
};

exports.postLogin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then(user => {
    if (!user) {
      return res.send("spierdalaj");
    }
    bcrypt
      .compare(password, user.password)
      .then(doMatch => {
        if (doMatch) {
          const token = getToken(user.toJSON());
          console.log("ss", token);
          res.json({
            token
          });
        } else {
          res.status(403).send("Wrong password");
        }
      })
      .catch(err => {
        console.log(err);
      });
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.send("logout");
  });
};
