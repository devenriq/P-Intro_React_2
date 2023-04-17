import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { TodoItem } from "../index";

export const TodoList = ({ defaultTodos, searchValue }) => {
  const filteredTodo = defaultTodos.filter(({ title }) => {
    const lowerTitle = title.toLowerCase();
    return lowerTitle.includes(searchValue.toLowerCase());
  });

  return (
    <ul className="w-full h-auto flex flex-col items-center gap-3">
      {filteredTodo.map(({ title, completed }) => (
        <TodoItem key={title} title={title} completed={completed} />
      ))}

      <PlusCircleIcon className="text-purple-400 w-20 h-20" />
    </ul>
  );
};
