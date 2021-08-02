const express = require("express")
require("dotenv").config()
const app = express()
const ToDoController = require("./controllers/ToDoController")
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.get("/todo", ToDoController.GetAllToDo)
app.post("/todo", ToDoController.PostToDo)
app.delete("/todo/:id", ToDoController.DeleteToDoById)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Running on port ${PORT}`))