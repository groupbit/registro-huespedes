server = require("./server")

mongoConnection = require("./src/mongo/mongoConnection")
Home = require("./src/mongo/mongoHome")
mongoConnection.connect( (db) => {
    huespedHome = new Home("huespedes", db)
    server.register(huespedHome);    
    server.init();
})

