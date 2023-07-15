require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "user_management",
  password: "swati123",
  port: 5000,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
