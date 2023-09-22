const mysql = require("mysql2");

// Creating a sql pool with db details
/**
 * It creates a connection when called with sql.query and ends
 * connection upon response
 */
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "pass",
  database: "smartparking",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}

const sql = mysql.createPool(dbConfig);

module.exports = sql;
