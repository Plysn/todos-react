import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/styles.css";

function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
    // hanlde condition here

    navigate("/todos");

    // errors
  };

  return (
    <div>
      <form className="login-form">
        <span>LOGIN</span>
        <input
          type="text"
          placeholder="Username"
          className="input-login username"
        />
        <input
          type="password"
          placeholder="Password"
          className="input-login password"
        />
        <button className="input-login button" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
