const db = require("../config/db");

const chart = {
  getV1: function (callback) {
    return db.query(
      "SELECT * FROM v1_monthly; SELECT * FROM v1_annual; SELECT * FROM v2;",
      callback
    );
  },
  getV5: function (callback) {
    return db.query("SELECT * FROM v5", callback);
  },
  getV4: function (callback) {
    return db.query(
      "SELECT * FROM v4; SELECT * FROM v4_2; SELECT * FROM v4_3; SELECT * FROM v3_annual;",
      callback
    );
  },
  getV3: function (callback) {
    return db.query(
      "SELECT * FROM v3_monthly; SELECT * FROM v3_annual;",
      callback
    );
  },
  getV6: function (callback) {
    return db.query("SELECT * FROM v6;", callback);
  },
  getV7: function (callback) {
    return db.query("SELECT * FROM v7; SELECT * FROM v6;", callback);
  },
  getV8: function (callback) {
    return db.query("SELECT * FROM v8; SELECT * FROM v8_year", callback);
  },
};

module.exports = chart;
