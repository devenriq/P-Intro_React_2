import { useState } from "react";

export const CreateTodoButton = () => {
  const [button, setButton] = useState([]);

  const handleAdd = () => {
    console.log("click");
  };

  return (
    <div className="flex justify-center items-center relative ">
      <button
        className="bg-red-400 w-16 h-16 rounded-full flex-shrink-0  fixed z-50 bottom-10 right-10 hover:w-20 hover:h-20"
        onClick={handleAdd}
      >
        <span className="text-5xl hover:text-7xl text-white">+</span>
      </button>
    </div>
  );
};
