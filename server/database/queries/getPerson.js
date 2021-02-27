const dbConnection = require("../dbConnection");
const getPerson = (id) => {
  console.log(dbConnection, "--111111111111");
  console.log("111111111111111111111111111", id);
  dbConnection
    .query("select * from person where id = $1", [id])
    .then((res) => {
      console.log(res.rows, "resresres0000000000000000000000");
      return res.rows;
    })
    .catch((err) => {
      console.log(err, "7777777777777 eeeeerrrrrrrrr");

      return err;
    });
  return dbConnection
    .query("select * from person where id = $1", [id])
    .then((res) => {
      console.log(res.rows, "resresres0000000000000000000000");
      return res.rows;
    })
    .catch((err) => {
      console.log(err, "7777777777777 eeeeerrrrrrrrr");

      return err;
    });
};
module.exports = getPerson;
