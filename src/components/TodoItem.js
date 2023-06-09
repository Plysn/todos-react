import React, { memo, useState } from "react";

const TodoItem = (props) => {
  const { isCompleted, id, deleteTodo, editTodo } = props;
  const [isEditing, setEditing] = useState(false);
  const [editText, setEditText] = useState();

  function handleEdit() {
    if (editText) {
      editTodo({
        text: editText,
        id,
      });
      setEditing(false);
    }
  }

  return (
    <li className={!isEditing ? "isEditing" : ""}>
      {isEditing ? (
        <div className="edit_item">
          <input
            type="text"
            placeholder="Edit todo"
            defaultValue={props.text}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
          ></input>
          <button
            className="button"
            onClick={(e) => {
              handleEdit(e);
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="main_item">
          <span
            className={isCompleted ? "completed" : ""}
            onClick={(e) => {
              editTodo({ isCompleted: !isCompleted, id });
            }}
          >
            {props.text}
          </span>
          <div className="icon">
            <i
              className="fa-solid fa-pen-to-square edit"
              onClick={() => {
                setEditing(!isEditing);
              }}
            ></i>
            <i
              className="fa-solid fa-trash delete"
              onClick={() => {
                const confirmed = window.confirm("Bạn có chắc chắn muốn xóa?");
                if (confirmed) {
                  deleteTodo(props.id);
                }
              }}
            ></i>
          </div>
        </div>
      )}
    </li>
  );
};

export default memo(TodoItem);
