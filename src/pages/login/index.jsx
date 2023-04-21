import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../services/baseApi";
import "../../css/styles.css";

function Login() {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;

    // calling api

    instance
      .get("/users")
      .then((res) => {
        //map data so sanh user, password
        for (const user of res.data) {
          if (
            username.value === user.username &&
            password.value === user.password
          ) {
            navigate("/todos");
            break;
          } else {
            setIsSuccess(false);
            break;
          }
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <form className="login-form" onSubmit={(e) => handleSubmit(e, navigate)}>
        <span>LOGIN</span>
        <input
          type="text"
          placeholder="Username"
          className={
            isSuccess
              ? "input-login username "
              : "input-login username input-error"
          }
          name="username"
        />
        <input
          type="password"
          placeholder="Password"
          className={
            isSuccess
              ? "input-login password "
              : "input-login password input-error"
          }
          name="password"
        />
        <span className={isSuccess ? "login-success" : "login-error"}>
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
