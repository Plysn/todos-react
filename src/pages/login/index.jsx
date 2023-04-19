import React from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../services/baseApi";
import "../../css/styles.css";

function Login() {
  const navigate = useNavigate();

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
            console.log(true);
            navigate("/todos");
            break;
          } else console.log(false);
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
          className="input-login username"
          name="username"
        />
        <input
          type="password"
          placeholder="Password"
          className="input-login password"
          name="password"
        />
        <button className="input-login button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
