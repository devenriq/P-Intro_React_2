import { useContext, useEffect, useState } from "react";

import {
  TodoCounter,
  TodoSearch,
  TodoList,
  CreateTodoButton,
} from "./components";

import Modal from "./components/modal/Modal";

import { useLocalStorage } from "./components/hooks/useLocalStorage";
import { TodoProvider } from "./components/context/TodoProvider";
import { TodoContext } from "./components/context/TodoContext";

import "../dist/index.css";

function TodoApp() {
  const { openModal, setOpenModal } = useContext(TodoContext);

  console.log(openModal);

  return (
    <TodoProvider>
      <div className="w-full h-screen bg-red-800 bg-opacity-20">
        <TodoCounter />
        <TodoSearch />
        <TodoList />
        {!!openModal && (
          <Modal>
            <p>Teleport</p>
          </Modal>
        )}
        <CreateTodoButton />
      </div>
    </TodoProvider>
  );
}

export default TodoApp;
