const mysql = require("mysql2");
const HOST = process.env.MYSQL_HOST;
// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
module.exports = pool;