const db = require("../config/db");
const bcrypt = require("bcrypt");

const saltRounds = 10;
const user = {
  add: function (req, callback) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      return db.query(
        "INSERT INTO users (username, password, fname, lname) VALUES (?,?,?,?)",
        [req.body.username, hash, req.body.fname, req.body.lname],
        callback
      );
    });
  },

  userInfo: function (userId, callback) {
    return db.query(
      "SELECT users.*, group_concat(views.url) as views FROM users JOIN views ON users.user_ID = views.user_ID WHERE users.user_ID = ?",
      [userId],
      callback
    );
  },

  getByUsername: function (username, callback) {
    return db.query(
      "SELECT * FROM users WHERE username = ?",
      [username],
      callback
    );
  },

  delete: function (username, callback) {
    return db.query(
      "DELETE FROM users WHERE user_ID = ?",
      [username],
      callback
    );
  },
};

module.exports = user;
