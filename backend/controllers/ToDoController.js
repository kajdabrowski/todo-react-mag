const ToDo = require("../models/ToDo");

const GetAllToDo = async (req, res, next) => {
  try {
    console.log("get");
    const todos = await ToDo.findAll();

    if (!todos) {
      throw new Error("resource not found");
    }
    res.json({ todos });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const PostToDo = async (req, res, next) => {
  try {
    console.log("post");
    const { todo } = req.body;
    console.log(todo);
    const newTodo = await ToDo.create({ description: todo });
    res.json({ newTodo });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const DeleteToDoById = async (req, res, next) => {
  try {
    console.log("delete");
    const todo = await ToDo.destroy({ where: { id: req.params.id } });
    res.json({ message: `Todo with id ${req.params.id} successfully deleted` });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  GetAllToDo,
  PostToDo,
  DeleteToDoById,
};
