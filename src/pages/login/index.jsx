import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../services/baseApi";
import "../../css/styles.css";

function Login() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;

    // calling api
    try {
      const res = await instance.get("/users");
      const isValid = res.data.some((user) => {
        return (
          username.value === user.username && password.value === user.password
        );
      });
      if (isValid) {
        localStorage.setItem("isLogin", isValid);
        navigate("/todos");
      } else {
        setIsError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <span>LOGIN</span>
        <input
          type="text"
          placeholder="Username"
          className={
            !isError
              ? "input-login username "
              : "input-login username input-error"
          }
          name="username"
        />
        <input
          type="password"
          placeholder="Password"
          className={
            !isError
              ? "input-login password "
              : "input-login password input-error"
          }
          name="password"
        />
        <span className={!isError ? "login-success" : "login-error"}>
          *Tên đăng nhập hoặc mật khẩu không chính xác!
        </span>
        <button className="input-login button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
