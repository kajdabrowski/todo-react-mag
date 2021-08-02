const db = require("./connection")

//importera models från models mappen

require("../models/ToDo")

db.sync()