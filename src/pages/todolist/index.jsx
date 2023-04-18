import Header from "../../components/Header";
import "../../css/styles.css";
// import { render } from "@testing-library/react";
import React, { useState } from "react";
import TodoListInner from "../../components/TodoList"

function TodoList() {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  function addTodo(todo) {
    setState((prev) => {
      const todos = [...prev, todo];
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    });
  }

  function deleteTodo(id) {
    const newTodos = state.filter((todo) => todo.id !== id);
    setState(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  function editTodo(todos) {
    const newState = [...state];
    const index = newState.findIndex((todo) => {
      return todo.id === todos.id;
    });
    newState[index] = todos;
    setState(newState);
    localStorage.setItem("todos", JSON.stringify(newState));
  }

  
  return ( <div id="test">
  <Header addTodo={addTodo} />
  <TodoListInner todos={state} deleteTodo={deleteTodo} editTodo={editTodo} />
</div>   );
}

export default TodoList;
