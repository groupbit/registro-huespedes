express = require("express");
bodyParser = require("body-parser");
var cors = require('cors');

function init() {
  var server = express();
  server.use(bodyParser.json());
  server.use(cors());


  server.get("/saludar", (req, res) => {
      res.json("Hola") 
      res.end()
  })

  server.listen(8888, () => {
    console.log("Server running on port 8888");
  });
}

exports.init = init;
