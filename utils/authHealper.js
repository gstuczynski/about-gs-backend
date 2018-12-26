const jwt = require("jsonwebtoken");

exports.getToken = user => {
  return jwt.sign(user, "secret");
};

exports.verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  jwt.verify(token, "secret", (err, authData) => {
    if (!err) {
      next();
    }
    res.sendStatus(403);
    console.log(err);
  });
};
