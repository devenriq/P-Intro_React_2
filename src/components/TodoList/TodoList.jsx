import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { TodoItem } from "../index";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoList = () => {
  const {
    todos,
    searchValue,
    toggleTodoCompleted,
    toggleTodoDelete,
    error,
    loading,
  } = useContext(TodoContext);

  const filteredTodo = todos.filter(({ title }) => {
    const lowerTitle = title.toLowerCase();
    return lowerTitle.includes(searchValue.toLowerCase());
  });

  console.log(loading);
  console.log(searchValue.length);

  return (
    <ul className="w-full h-auto flex flex-col items-center gap-3">
      {error && <p>Something went wrong.</p>}
      {loading && <p>It's loading...</p>}
      {!loading && !todos.length && <p>Create your first Todo</p>}

      {filteredTodo.map(({ title, completed }) => (
        <TodoItem
          key={title}
          title={title}
          completed={completed}
          toggleTodoCompleted={toggleTodoCompleted}
          toggleTodoDelete={toggleTodoDelete}
        />
      ))}

      <PlusCircleIcon className="text-purple-400 w-20 h-20" />
    </ul>
  );
};
