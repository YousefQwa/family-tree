const dbConnection = require("../dbConnection");
console.log(dbConnection, "*22222222*");

const getParent = (childId) =>
  dbConnection
    .query(
      "select * from child_parent inner join person on (child_parent.parent_id = person.id) where child_id = $1",
      [childId]
    )
    .then((res) => {
      return res.rows;
    })
    .catch((err) => err);

module.exports = getParent;
