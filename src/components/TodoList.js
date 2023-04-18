import React, { memo } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { todos, deleteTodo, editTodo, editingId, setEditingId } = props;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          editingId={editingId}
          setEditingId={setEditingId}
        />
      ))}
    </ul>
  );
};

export default memo(TodoList);
