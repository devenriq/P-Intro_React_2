import { useState } from "react";

import {
  TodoCounter,
  TodoSearch,
  TodoList,
  CreateTodoButton,
} from "./components";

import { defaultTodos } from "./data/todos";
import "../dist/index.css";

function TodoApp() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  const toggleTodoCompleted = (title) => {
    const todoIndex = todos.findIndex((todo) => todo.title === title);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    setTodos(newTodos);
  };

  console.log(todos);

  const completedTodo = todos.filter((todo) => !!todo.completed).length;
  const pendingTodo = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="w-full h-screen bg-red-800 bg-opacity-20">
      <TodoCounter
        todos={todos}
        completedTodo={completedTodo}
        pendingTodo={pendingTodo}
      />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList
        todos={todos}
        searchValue={searchValue}
        toggleTodoCompleted={toggleTodoCompleted}
      />
      <CreateTodoButton />
    </div>
  );
}

export default TodoApp;
