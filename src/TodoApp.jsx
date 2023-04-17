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
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos = localStorageTodos ? JSON.parse(localStorageTodos) : [];

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
  }

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState("");

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", stringifiedTodos);
    setTodos(newTodos);
  };

  const toggleTodoCompleted = (title) => {
    const todoIndex = todos.findIndex((todo) => todo.title === title);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    saveTodos(newTodos);
  };

  const toggleTodoDelete = (title) => {
    const todoIndex = todos.findIndex((todo) => todo.title === title);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };

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
        toggleTodoDelete={toggleTodoDelete}
      />
      <CreateTodoButton />
    </div>
  );
}

export default TodoApp;
