import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const TodoItem = ({ title, completed }) => {
  const [complete, setComplete] = useState(completed);

  const onComplete = () => {
    setComplete(!complete);
  };

  const onDelete = () => {
    console.log(`Borraste el todo ${title}`);
  };

  console.log(complete);

  return (
    <li className="bg-white w-11/12 h-10 rounded-full py-2 px-8 grid grid-cols-12 relative">
      <p
        className="col-span-1 flex justify-center items-center"
        onClick={onComplete}
      >
        {complete ? (
          <CheckCircleIcon className="w-5 h-5 " />
        ) : (
          <EllipsisHorizontalCircleIcon className="w-5 h-5 " />
        )}
      </p>

      <h2 className={`col-span-10 ${complete ? "line-through" : ""}`}>
        {title}
      </h2>

      <p className="col-span-1" onClick={onDelete}>
        <XCircleIcon className="w-5 h-5 absolute right-5" />
      </p>
    </li>
  );
};
