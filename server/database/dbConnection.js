const { Pool } = require("pg");
require("env2")("./config.env");
console.log(
  "888888888888888888881",
  Pool,
  "1888888888888888888888888888888888"
);

const connectionString = process.env.DATABASE_URL;
console.log("99999999999999999999999999");
if (!connectionString) {
  console.log("9999999999999888888888888");
  throw new Error("set DATABASE_URL");
}
console.log("101010101010101010101010");

module.exports = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});
