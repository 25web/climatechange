const mysql = require('mysql');
require('dotenv').config();

const conn = mysql.createPool({
    host: process.env.DB_HOST.toString(),
    user: process.env.DB_USER.toString(),
    password: process.env.DB_PASS.toString(),
    database: process.env.DB_NAME.toString(),
    multipleStatements: "true"
});

module.exports = conn;
