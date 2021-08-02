import { useState } from 'react'
import InputToDo from './components/input-todo';
import TodoList from './components/todo-list';
import Header from './components/header';
import '../src/styles.css'


function App() {
  const [todoitem, setTodoItem] = useState([])

  function inputHandler(str) {
        setTodoItem([...todoitem,str])
  }

  function deleteToDo(index){
    const arr = todoitem.filter((item, idx) => idx !== index) 
    setTodoItem([...arr])
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
