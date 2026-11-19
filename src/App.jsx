
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

const App = () => {
  const [filter, setFilter] = useState("All");

  return (
    <div className="app">
      <h1>My Todo App</h1>

      <TodoForm />

      <TodoFilter
        filter={filter}
        setFilter={setFilter}
      />

      <TodoList filter={filter} />
    </div>
  );
};

export default App;
