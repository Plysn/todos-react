import React, { memo } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { todos, deleteTodo } = props;

  return (
    <ul class="todo-list">
      {todos.map((todo, index) => (
        <TodoItem {...todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default memo(TodoList);
