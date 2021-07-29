import React from 'react'
import BaseButton from './base-button'

const ToDoList = ({todoitem, deleteToDo}) =>{

    return (
        <ul className="todo-list">
            {todoitem.map((item, index) => 
                <li key={index}>
                    {item}
                <BaseButton onClick={() => deleteToDo(index)}>X</BaseButton>
                </li>
                )}
        </ul>
    )
}

export default ToDoList