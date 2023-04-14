import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./css/styles.css";
// import { render } from "@testing-library/react";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState([]);

  function addTodo(todo) {
    setState((prev) => [...prev, todo]);
  }

  function deleteTodo(id) {
    const newTodos = state.filter((todo) => todo.id !== id);
    setState(newTodos);
    console.log(id);
  }

  return (
    <div id="test">
      <Header addTodo={addTodo} />
      <TodoList todos={state} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
