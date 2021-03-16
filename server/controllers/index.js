const express = require("express");
const router = express.Router();
const getChildren = require("./getChildren");
const getParents = require("./getParents");
const getParent = require("./getParent");
const getTree = require("./getTree");
const getPerson = require("./getPerson");
const tryQuery = require("../database/queries/try");

router.get("/", async (req, res) => {
  const a = await tryQuery();
  console.log(
    "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddone"
  );
  res.send("00000");
});
router.get("/parents/:childId", getParents);
router.get("/parent/:childId", getParent);
router.get("/children/:parentId", getChildren);
router.get("/tree/:rootId", getTree);
router.get("/person/:personId", getPerson);
module.exports = router;
