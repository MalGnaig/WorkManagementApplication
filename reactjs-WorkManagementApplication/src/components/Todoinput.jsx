import { useState } from "react"

export default function TodoInput(props) {

    const {handleAddTodos, todoValue, setTodoValue} = props

    return (
        <header>
            <input className="containerType" type="text" placeholder = "Enter Task" value ={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }}/>

            {/* This is the add button */}
            <button  onClick = {() => {
                handleAddTodos(todoValue)
                setTodoValue('') // setting the value in the comment box to empty when it's added.
            }}  >Add</button>
        </header>
    )

    
}