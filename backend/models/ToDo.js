const db = require("../db/connection")
const { DataTypes } =  require("sequelize")

const ToDo = db.define("ToDo", {
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.export = ToDo
