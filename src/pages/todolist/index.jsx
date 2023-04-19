import Header from "../../components/Header";
import "../../css/styles.css";
// import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import TodoListInner from "../../components/TodoList";
import instance from "../../services/baseApi";

function TodoList() {
  const [state, setState] = useState([]);

  useEffect(() => {
    instance
      .get("/todos")
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  function addTodo(todo) {
    instance
      .post("/todos", { ...todo, user_id: 1 })
      .then((res) => {
        setState((prev) => {
          const todos = [...prev, res.data];
          return todos;
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteTodo(id) {
    instance
      .delete(`/todos/${id}`)
      .then((res) => {
        const newTodos = state.filter((todo) => todo.id !== id);
        setState(newTodos);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function editTodo(todos) {
    console.log(todos);
    instance
      .patch(`/todos/${todos.id}`, todos)
      .then((res) => {
        const newState = [...state];
        const index = newState.findIndex((todo) => {
          return todo.id === todos.id;
        });
        newState[index] = res.data;
        setState(newState);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div id="test">
      <Header addTodo={addTodo} />
      <TodoListInner
        todos={state}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default TodoList;
