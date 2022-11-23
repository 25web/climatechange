const db = require("../config/db");

const chart = {
  getV1: function (callback) {
    return db.query(
      "SELECT * FROM v1_monthly; SELECT * FROM v1_annual; SELECT * FROM v2;",
      callback
    );
  },
  getV3: function (callback) {
    return db.query(
      "SELECT * FROM v3_monthly; SELECT * FROM v3_annual;",
      callback
    );
  },
};

module.exports = chart;
