const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  try {
    let token = req.header("Authorization");
    token = token.replace("Bearer ", "");
    if (!token) return res.status(401).send("Access denied. no token provided");
    const payload = jwt.verify(token, config.get("jwtPrivateKey"));
    if (payload) req.user = payload;
    next();
  } catch (error) {
    res.status(401).send("Invalid token");
  }
};
