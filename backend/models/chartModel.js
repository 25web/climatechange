const db = require("../config/db");

const chart = {
  getV1monthly: function (callback) {
    return db.query(
      "SELECT * FROM v1_monthly; SELECT * FROM v1_annual;",
      callback
    );
  },
  getV6: function (callback) {
    return db.query("SELECT * FROM v6;", callback);
  },
  getV7: function (callback) {
    return db.query("SELECT * FROM v7; SELECT * FROM v6;", callback);
  },
};

module.exports = chart;
