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
      if (err) {
        if (err.errno === 1062) {
          res.status(400).json({ message: "Username already exists." });
          return;
        }
      } else {
        return res
          .status(200)
          .json({ message: "User registered successfully." });
      }
    });
  }
};

const getAllUsers = (req, res) => {
  // FIXME
  return res.status(200).json({ message: "Return all users." });
};

const getByUsername = (req, res) => {
  user.getByUsername(req.params.username, function (err, result) {
    if (err) {
      res.status(400).json({ message: "Error." });
      return;
    }
    if (result.length === 0) {
      res.status(400).json({ message: "User not found." });
      return;
    }
    return res.status(200).json(result[0]);
  });
};

module.exports = {
  register,
  getAllUsers,
  getByUsername,
};
