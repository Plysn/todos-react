import React, { memo } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { todos } = props;
  console.log(todos);

  return (
    <ul class="todo-list">
      {todos.map((todo) => (
        <TodoItem {...todo} />
      ))}
    </ul>
  );
};

export default memo(TodoList);
