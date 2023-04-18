import React, { useEffect } from "react";
import { TodoContext } from "./TodoContext";

export const TodoProvider = ({ children }) => {
  // const {
  //   item: todos,
  //   saveItem: saveTodos,
  //   loading,
  //   error,
  // } = useLocalStorage("TODOS_V1", []);
  // const [searchValue, setSearchValue] = useState("");

  // useEffect(() => {
  //   console.log("use effect");
  // }, [todos]);

  // const toggleTodoCompleted = (title) => {
  //   const todoIndex = todos.findIndex((todo) => todo.title === title);
  //   const newTodos = [...todos];
  //   newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

  //   saveTodos(newTodos);
  // };

  // const toggleTodoDelete = (title) => {
  //   const todoIndex = todos.findIndex((todo) => todo.title === title);
  //   const newTodos = [...todos];
  //   newTodos.splice(todoIndex, 1);

  //   saveTodos(newTodos);
  // };

  // const completedTodo = todos.filter((todo) => !!todo.completed).length;
  // const pendingTodo = todos.filter((todo) => !todo.completed).length;

  return (
    <TodoContext.Provider
      value={
        {
          // todos,
          // saveTodos,
          // loading,
          // error,
          // toggleTodoCompleted,
          // toggleTodoDelete,
          // completedTodo,
          // pendingTodo,
        }
      }
    >
      {children}
    </TodoContext.Provider>
  );
};
