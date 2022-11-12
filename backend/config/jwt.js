const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateToken(user) {
  return jwt.sign({ userId: user }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
}

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log(err.message);
      return res.status(403).send("Invalid token");
    }
    req.userId = user.userId;
    next();
  });
}

module.exports = { generateToken, verifyToken };
