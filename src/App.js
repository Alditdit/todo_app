import { useState } from 'react';
import './App.css';
import { TodoList } from './component/TodoList'
import { TodoAdd } from './component/TodoAdd'
import {
  getTodoFromLocalStorage,
  saveTodoToLocalStorage,
} from "./utils/LocalStorage";

function App() {
  const [todos, setTodos] = useState(getTodoFromLocalStorage("todos") || []);

  const addTodo = (value) => {
    const newTodos = [...todos, { text: value }];
    setTodos(newTodos);
    saveTodoToLocalStorage("todos", newTodos)
  };

  const toggleTodo = (ind) => {
    const newTodos = [...todos];
    newTodos[ind].isCompleted = !newTodos[ind].isCompleted;
    setTodos(newTodos);
    saveTodoToLocalStorage("todos", newTodos);
  };

  const deleteTodo = (ind) => {
    const newTodos = [...todos];
    newTodos.splice(ind, 1);
    setTodos(newTodos);
    saveTodoToLocalStorage("todos", newTodos)
  };



  return (
    <div className="App">
      <h1>ALDIT TODO-APP</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <TodoAdd addTodo={addTodo} />
    </div>
  );
}

export default App;
