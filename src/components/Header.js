import React from "react";

function Header() {
  return (
    <form className="header">
      <input type="text" placeholder="Enter todo" />
      <button type="submit" id="button-add" class="button">
        Add
      </button>
    </form>
  );
}

export default Header;
