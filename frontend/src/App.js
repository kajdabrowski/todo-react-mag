import { useEffect, useState } from 'react'
import InputToDo from './components/input-todo';
import TodoList from './components/todo-list';
import Header from './components/header';
import '../src/styles.css'
import axios from 'axios'


function App() {
  const [todoitem, setTodoItem] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4242/todo').then(
      (response) => {
        setTodoItem([...response.data.todos])
      })
  }, [])

  function inputHandler(str) {
    axios.post('http://localhost:4242/todo', {
      todo: str
    }).then(
      (response) => {
        setTodoItem([...todoitem, response.data.newTodo])
      })
  }

  function deleteToDo(index){
    axios.delete(`http://localhost:4242/todo/${index}`).then((response) => {
      const arr = todoitem.filter((item) => item.id !== index) 
      setTodoItem([...arr])
    })
  }

  return (
    <div className="grid-container">
      <Header />
      <InputToDo inputHandler={inputHandler} />
      <TodoList todoitem={todoitem} deleteToDo={deleteToDo}/>
    </div>
  );
}

export default App;
