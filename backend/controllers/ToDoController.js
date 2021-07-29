const ToDo = require("../models/ToDo")


const GetAllToDo = async (req, res, next) => {
    console.log("getAll Todos")
}

const PostToDo = async (req, res, next) => {
    console.log("post a ToDo")
}

const DeleteToDoById = async (req, res, next) => {
    console.log("delete todo by ID")
}

module.exports = {
    GetAllToDo,
    PostToDo,
    DeleteToDoById
}