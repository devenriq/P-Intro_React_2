import { TodoItem } from "./components/TodoItem/TodoItem";

import { todos } from "./data/todos";

import "../dist/index.css";

function App() {
  console.log(todos);
  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <ul>
        {todos.map(({ title, completed }) => (
          <TodoItem key={title} title={title} completed={completed} />
        ))}
      </ul>
    </>
  );
}

export default App;
