import Header from "../../components/Header";
import "../../css/styles.css";
// import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import TodoListInner from "../../components/TodoList";
import instance from "../../services/baseApi";

function TodoList() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todoList = await instance.get("/todos");
        // if status !== 2xx || 3xx --> return
        setState(todoList.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  async function addTodo(todo) {
    try {
      const res = await instance.post("/todos", { ...todo, user_id: 1 });
      setState((prev) => {
        const todos = [...prev, res.data];
        return todos;
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteTodo(id) {
    try {
      const res = await instance.delete(`/todos/${id}`);
      const newTodos = state.filter((todo) => todo.id !== id);
      setState(newTodos);
    } catch (err) {
      console.log(err);
    }
  }

  async function editTodo(todos) {
    try {
      const res = await instance.patch(`/todos/${todos.id}`, todos);
      const newState = [...state];
      const index = newState.findIndex((todo) => {
        return todo.id === todos.id;
      });
      newState[index] = res.data;
      setState(newState);
    } catch (err) {
      console.log(err);
    }
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
