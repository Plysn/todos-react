import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/styles.css";

function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
    // hanlde condition here
    // navigate("/todos");
    // errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;

    console.log(username.value);
    console.log(password.value);

    // calling api
  };

  console.log("rerender");

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <span>LOGIN</span>
        <input
          type="text"
          placeholder="Username"
          className="input-login username"
          name="username"
        />
        <input
          type="password"
          placeholder="Password"
          className="input-login password"
          name="password"
        />
        <button
          className="input-login button"
          onClick={handleClick}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
