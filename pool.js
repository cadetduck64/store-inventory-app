const { Pool } = require("pg");

module.exports = new Pool({
  host: "", 
  user: "",
  database: "",
  password: "",
  port: 10000, 
});
