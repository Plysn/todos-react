import React, { useState } from "react";

function Header(props) {
  const [text, setText] = useState("");
  const { addTodo } = props;
  function handleSubmit(e) {
    e.preventDefault();
    if (text) {
      addTodo({
        id: new Date().toISOString(),
        text,
        isCompleted: false,
      });
      setText("");
    }
  }
  return (
    <>
      <form className="header">
        <input
          type="text"
          placeholder="Enter todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          id="button-add"
          className="button"
          onClick={(e) => handleSubmit(e)}
        >
          Add
        </button>
      </form>
    </>
  );
}

export default Header;
