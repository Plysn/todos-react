import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/styles.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="home content">
      <div>Bạn đã có tài khoản?</div>
      <div className="home-button">
        <button className="button" onClick={handleSignup}>
          Đăng ký
        </button>
        <button className="button" onClick={handleLogin}>
          Đăng nhập
        </button>
      </div>
    </div>
  );
}

export default Login;
