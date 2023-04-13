import React, { memo } from "react";

const TodoItem = (props) => {
  function handleDelete(e) {}

  return (
    <li
      className={props.status}
      onClick={(e) => {
        e.target.parentNode.classList.add("completed");
      }}
    >
      <span>{props.text}</span>
      <div class="icon">
        <i class="fa-solid fa-pen-to-square edit"></i>
        <i
          class="fa-solid fa-trash delete"
          onClick={(e) => {
            handleDelete(e);
          }}
        ></i>
      </div>
    </li>
  );
};

export default memo(TodoItem);