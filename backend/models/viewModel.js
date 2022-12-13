const db = require("../config/db");

const view = {
  get: function (url, callback) {
    return db.query("SELECT * FROM views WHERE url = ?", [url], callback);
  },

  new: function (url, charts, title, userId, callback) {
    return db.query(
      "INSERT INTO views (url, charts, title, user_ID) VALUES (?,?,?,?)",
      [url, charts, title, userId],
      callback
    );
  },

  delete: function (url, userId, callback) {
    return db.query(
      "DELETE FROM views WHERE url = ? AND user_ID = ?",
      [url, userId],
      callback
    );
  },

  all: function (callback) {
    return db.query("SELECT * FROM views", callback);
  },
};

module.exports = view;
