import React, {useRef} from 'react'
import BaseButton from './base-button'


const InputToDo = ({inputHandler}) => {
    const todoInput = useRef()
    const submitHandler = (event) => {
        event.preventDefault()
        inputHandler(todoInput.current.value)
    }

    return (
        <form onSubmit={submitHandler} className="input-todo">
                    <input type="text" placeholder="Att-göra" ref={todoInput} />
                    <BaseButton>Att-göra</BaseButton>
        </form>

    )
}

export default InputToDo
