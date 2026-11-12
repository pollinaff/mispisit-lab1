const { Pool } = require("pg");

const DATABASE_URL =
  process.env.DATABASE_URL || "postgres://app:app@db:5432/app";

const pool = new Pool({
  connectionString: DATABASE_URL,
});

module.exports = {
  pool,
  DATABASE_URL,
};
