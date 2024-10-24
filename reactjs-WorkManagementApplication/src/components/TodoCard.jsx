import React from 'react'
// typr 'rfc' when creating new components class 

export default function TodoCard(props) {
  const {children, handleDeleteTodo, index, handleEditTodo, handleOpenModel, handleCloseModel} = props /* now we're going into the props and we destructor all the children elements from the TodoList*/
  return (
    <li className='todoItem'>  { /*className is a class and makes each item styled by the 'todoItem' css */ }
      {children} {/* we are rendering the children from above which if you go into todoList, it'll get all the children within the <TodoCard> </ToDocard> in todoList class which is the 'todos'*/}
      <div className= 'actionContainer'>
        <button style = {{margin:'5px'}} onClick={() => {
          handleDeleteTodo(index)
        }}>
        <i className="fa-solid fa-trash"></i>
        </button>

        <button style = {{margin: '5px'}} onClick={() => handleEditTodo(index)}>
        <i className="fa-solid fa-pen-to-square"></i> {/* this is the edit image */}
        </button>

        <button style = {{margin: '5px'}} onClick={() => {
          handleOpenModel(index)}}>
        <i className="fa-solid fa-clock"></i>
        </button>

      </div>
    </li>  
    
  )
}
