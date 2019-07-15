express = require("express");
bodyParser = require("body-parser");
var cors = require('cors');

var homes = {}

function register(home) {
  console.log(`registering handlers for ${home.type}`)
  homes[home.type] = home 
}

function init() {
  var server = express();
  server.use(bodyParser.json());
  server.use(cors());


  server.post("/:type", (req, res) => {
    home = homes[req.params.type]
    home.insert(req.body)
    res.status(204).end();  
  })

  server.put("/:type", (req, res) => {
    home = homes[req.params.type]
    home.update(req.body)
    res.status(204).end();  
  })

  server.get("/:type", (req, res) => {
    home = homes[req.params.type]
    home.all((allObjects) => {
        res.json(allObjects) 
        res.end() })       
  })

  server.get("/saludar", (req, res) => {
      res.json("Hola") 
      res.end()
  })

  server.listen(8888, () => {
    console.log("Server running on port 8888");
  });
}

exports.init = init;
exports.register = register;
