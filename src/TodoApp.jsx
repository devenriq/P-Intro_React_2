import { useState } from "react";

import {
  TodoCounter,
  TodoSearch,
  TodoList,
  CreateTodoButton,
} from "./components";

import { useLocalStorage } from "./components/hooks/useLocalStorage";

import "../dist/index.css";

function TodoApp() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

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
