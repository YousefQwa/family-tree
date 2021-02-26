const getPersonQuery = require("../database/queries/getPerson");

const getPerson = (req, res) => {
  console.log(req.url, "666666666666666666");

  getPersonQuery(req.params.personId)
    .then((person) => {
      console.log(person, "ppppppppppppppppppppppperson");
      res.send(person);
    })
    .catch((err) => res.send("err"));
};

module.exports = getPerson;
