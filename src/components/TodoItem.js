import React, { memo, useState } from "react";

const TodoItem = (props) => {
  const { deleteTodo } = props;
  const [isCompleted, setCompleted] = useState(true);

  function handleCompleted() {
    setCompleted(!isCompleted);
  }

  return (
    <li>
      <span
        className={!isCompleted ? "completed" : ""}
        onClick={(e) => {
          handleCompleted(e);
        }}
      >
        {props.text}
      </span>
      <div class="icon">
        <i class="fa-solid fa-pen-to-square edit"></i>
        <i
          class="fa-solid fa-trash delete"
          onClick={() => {
            deleteTodo(props.id);
          }}
        ></i>
      </div>
    </li>
  );
};

export default memo(TodoItem);
