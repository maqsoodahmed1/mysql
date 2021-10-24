const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var sql = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});


sql.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});


module.exports = sql;
