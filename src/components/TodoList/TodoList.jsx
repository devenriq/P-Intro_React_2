import { PlusCircleIcon } from "@heroicons/react/24/solid";

import { TodoItem } from "../index";

import { todos } from "../../data/todos";

export const TodoList = () => {
  return (
    <ul className="w-full h-auto flex flex-col items-center gap-3">
      {todos.map(({ title, completed }) => (
        <TodoItem key={title} title={title} completed={completed} />
      ))}
      <PlusCircleIcon className="text-purple-400" />
    </ul>
  );
};
