const getPersonQuery = require("../database/queries/getPerson");

const getPerson = (req, res) => {
  console.log(req.url, "666666666666666666");
  // res.send([{ id: 17, name: "احمد" }]);
  getPersonQuery(req.params.personId)
    .then((person) => {
      console.log(person, "ppppppppppppppppppppppperson");
      res.send(person);
    })
    .catch((err) => res.send("err"));
  res.send("wowwowowwowowwwo");
};

module.exports = getPerson;
