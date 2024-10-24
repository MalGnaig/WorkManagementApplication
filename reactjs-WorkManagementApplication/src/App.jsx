import { useState, useEffect } from "react";
import TodoInput from "./components/Todoinput";
import TodoList from "./components/TodoList";
import PopUpBoxModel from "./components/PopUpBoxModel";

// run by using command 'npm start'

function App() {

  {/* So we can use normal variables but because the user is gonna be inputting there todos on the app, we use STATEFUL variables using useState([]), 'todos' is the list of todos and the 2nd is a setter function called setTodos. it's an empty array in the function as we know the todos is a list  */}
  const [todos, setTodos] = useState([]);
  const[todoValue, setTodoValue] = useState('');
  const[showModel, setShowModel] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(""); // this was made for the popup remainder box to show what task is needed to complete

  const handleOpenModel = (index) => {
    setSelectedTodo(todos[index]);
    setShowModel(true);
    console.log("Modal opened");
  }

  const handleCloseModel = () => {
    setShowModel(false);
    console.log("Modal closed");
  }  

    // this is the second part needed to keep the data when you refresh the page
    function persistData(newList) {
      localStorage.setItem('todos', JSON.stringify({todos: newList}))
    }

    function handleAddTodos(newTodo) {
      const newTodoList = [...todos, newTodo];
      persistData(newTodoList); // ensuring the data stays when you refresh
      setTodos(newTodoList) // this is where we call the setTodos function from above within this handleAddTodos method
    }

    function handleDeleteTodo(index) {
      const newTodoList = todos.filter((todo, todoIndex) => {
        return todoIndex !== index /* if todoIndex (each index from the array of todos) !== (doesn't equal) index which is the current index. if it returns trues menaing they don't match then keep it, if it returns false it means the indexes are the same so remove it */
      })
      persistData(newTodoList); 
      setTodos(newTodoList)
    }

    // The value when the user types 'todoInput' is located in the class 'ToDoInput.jsx' and since ToDoList.jsx is on the same level as todoInput, this means the ToDoList doesn't have access to the 'todoInput' so thats why we're doing the method here in the parent directory :)
    function handleEditTodo(index) {
      const valueToBeEdited = todos[index]
      setTodoValue(valueToBeEdited)
      handleDeleteTodo(index)
    }

    // this part of code prevents the data from being lost when you refresh the page. This function reads the todos I think
    useEffect(() => {
      if (!localStorage) {
        return;
      }
      let localTodos = localStorage.getItem('todos');
      if(!localTodos) {
        return;
      }
      localTodos = JSON.parse(localTodos).todos;
      setTodos(localTodos);
    }, []);

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList  handleOpenModel={handleOpenModel} handleDeleteTodo = {handleDeleteTodo} handleEditTodo = {handleEditTodo} todos={todos}/>
      <PopUpBoxModel show = {showModel} onClose={handleCloseModel} task = {selectedTodo}/>

    </>
  );
}

export default App;
