const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("../config/jwt");
const user = require("../models/userModel");

const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please enter username and password." });
  }
  user.getByUsername(username, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error." });
    }
    if (result.length === 0) {
      return res.status(400).json({ message: "Invalid username or password." });
    }

    bcrypt.compare(password, result[0].password.toString(), (err, match) => {
      if (err) {
        return res.json(err);
      }
      if (match) {
        const token = jwt.generateToken(result[0].user_ID);
        return res.status(200).json({
          message: "Successfully logged in.",
          token: token,
        });
      } else {
        return res.status(400).json({
          message: "Invalid username or password.",
        });
      }
    });
  });
};

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
        console.log(err);
        return res.status(500).json({ message: "Internal server error." });
      }
      res.status(200).json({ message: "User registered successfully." });
    });
  }
};

const getAllUsers = (req, res) => {
  // FIXME
  return res.status(200).json({ message: "Return all users." });
};

const deleteUser = (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: "Please enter username." });
  }
  user.delete(username, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error." });
    }
    if (result.affectedRows === 0) {
      return res.status(400).json({ message: "User not found." });
    }
    return res.status(200).json({ message: "User deleted successfully." });
  });
};

module.exports = {
  register,
  getAllUsers,
  login,
  deleteUser,
};
