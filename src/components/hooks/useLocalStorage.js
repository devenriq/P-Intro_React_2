import { useState } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem = localStorageItem
    ? JSON.parse(localStorageItem)
    : initialValue;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedTodos = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedTodos);
    setItem(newItem);
  };

  return [item, saveItem];
};
