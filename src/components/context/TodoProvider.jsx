import { useState } from "react";
import { TodoContext } from "./TodoContext";

import { defaultTodos } from "../../data/todos";

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text == text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const completedTodo = todos.filter((todo) => !!todo.completed).length;
  const pendingTodo = todos.filter((todo) => !todo.completed).length;

  return (
    <TodoContext.Provider
      value={{
        todos,
        completeTodo,
        completedTodo,
        pendingTodo,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
