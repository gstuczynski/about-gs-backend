const bcrypt = require("bcryptjs");
const User = require("../models/user");

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
          req.session.isLoggedIn = true;
          req.session.user = user;
          return req.session.save(err => {
            console.log(err);
            return res.send("gonwwwo");
          });
        }
        return res.send("Topsze");
      })
      .catch(err => {
        console.log(err);
      });
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.send('logout')
  });
};