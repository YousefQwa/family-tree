const dbConnection = require("../dbConnection");
console.log(dbConnection, "*4444444444*");

const try0 = () => {
  console.log(dbConnection, "--111111111111");
  console.log("111111111111111111111111111");
  dbConnection
    .query("select * from person limit 1 ")
    .then((res) => {
      console.log(res.rows, "r0esresres0000000000000000000000");
      return res.rows;
    })
    .catch((err) => {
      console.log(err, "70777777777777 eeeeerrrrrrrrr");

      return err;
    });
  return dbConnection
    .query("select * from person where id = $1", [1])
    .then((res) => {
      console.log(res.rows, "resresres0000000000000000000000");
      return res.rows;
    })
    .catch((err) => {
      console.log(err, "7777777777777 eeeeerrrrrrrrr");

      return err;
    });
};
module.exports = try0;
