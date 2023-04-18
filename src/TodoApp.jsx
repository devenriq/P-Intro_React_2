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
  const {} = useContext(TodoContext);
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    console.log("use effect");
  }, [todos]);

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
