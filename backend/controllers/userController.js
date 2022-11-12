const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("../config/jwt");
const user = require("../models/userModel");

const register = (req, res) => {
  if (
    !req.body.username ||
    !req.body.password ||
    !req.body.fname ||
    !req.body.lname
  ) {
    res.status(400).json({ message: "Please fill all fields." });
    return;
  } else {
    user.add(req, function (err, result) {
      if (err.errno === 1062) {
        res.status(400).json({ message: "Username already exists." });
        return;
      }
      res.status(200).json({ message: "User registered successfully." });
    });
  }
};

const getAllUsers = (req, res) => {
  // FIXME
  return res.status(200).json({ message: "Return all users." });
};

module.exports = {
  register,
  getAllUsers,
};
