import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoArr, setTodoArr] = useState([]);

  const AddTodoButton = (input, date) => {
    console.log(input, date);
    const newArr = [{name: input, dueDate: date}, ...todoArr];
    setTodoArr(newArr);
  }

  const deleteTodo = (name) => {
    console.log(name);
    const newArr = todoArr.filter(item => (item.name !== name))
    setTodoArr(newArr);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleClick = {AddTodoButton} />
      {todoArr.length === 0 && <WelcomeMessage />}
      <TodoItems arr={todoArr} onDelete={deleteTodo}></TodoItems>
    </center>
  );
}

export default App;
