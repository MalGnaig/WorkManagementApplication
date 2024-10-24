import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList(props) {

  const {todos} = props 

  return (
    <div className='background'>
      <ul className='main'>
        { /*So map takes in 2 arguments, the element in the array, and the index. you don't need to include the index though, you can call them anything */ }
        {todos.map((todo, todoIndex) => {
          return (
            /* So underneath the {...props} we are passing all the properties from TodoList to the other class/components to the TodoCard component */
            <TodoCard {...props} index={todoIndex}>
            <p>{todo}</p> {/* the todo is taken from the map((todo, todoIndex)) as map gets us the actual element */}
            </TodoCard>
          );
        })}
      </ul>
    </div>
  );
}
