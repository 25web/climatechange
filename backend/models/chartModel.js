const db = require("../config/db");

const chart = {
  getV1monthly: function (callback) {
    return db.query(
      "SELECT * FROM v1_monthly; SELECT * FROM v1_annual",
      callback
    );
  },
  getV5: function (callback) {
    return db.query("SELECT * FROM v5", callback);
  },
};

module.exports = chart;
