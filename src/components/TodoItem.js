import React, { memo } from "react";

const TodoItem = (props) => {
  console.log(props);

  return (
    <li>
      <span>{props.text}</span>
      <div class="icon">
        <i class="fa-solid fa-pen-to-square edit"></i>
        <i class="fa-solid fa-trash delete"></i>
      </div>
    </li>
  );
};

export default memo(TodoItem);
