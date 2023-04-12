import React from "react";

export const TodoItem = ({ title, completed }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{completed}</p>
    </li>
  );
};
