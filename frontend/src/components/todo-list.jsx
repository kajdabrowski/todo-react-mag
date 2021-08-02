import React from 'react'
import BaseButton from './base-button'

const ToDoList = ({todoitem, deleteToDo}) =>{

    return (
        <ul className="todo-list">
            {todoitem.map((item) => 
                <li key={item.id}>
                    {item.description}
                <BaseButton onClick={() => deleteToDo(item.id)}>X</BaseButton>
                </li>
                )}
        </ul>
    )
}

export default ToDoList