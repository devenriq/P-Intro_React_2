import { useContext, useEffect, useState } from "react";

import {
  TodoCounter,
  TodoSearch,
  TodoList,
  CreateTodoButton,
} from "./components";

import { useLocalStorage } from "./components/hooks/useLocalStorage";
import { TodoProvider } from "./components/context/TodoProvider";
import { TodoContext } from "./components/context/TodoContext";

import "../dist/index.css";

function TodoApp() {
  const {
    todos,
    saveTodos,
    loading,
    error,
    searchValue,
    setSearchValue,
    toggleTodoCompleted,
    toggleTodoDelete,
    completedTodo,
    pendingTodo,
  } = useContext(TodoContext);

  return (
    <TodoProvider>
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
          loading={loading}
        />
        <CreateTodoButton />
      </div>
    </TodoProvider>
  );
}

export default TodoApp;
