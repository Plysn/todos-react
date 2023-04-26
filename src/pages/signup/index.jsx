import { useNavigate } from "react-router-dom";
import instance from "../../services/baseApi";

function SignUp() {
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleSignup(e) {
    e.preventDefault();
    const { email, username, password, password_check } = e.target.elements;
    const user_id = new Date().toISOString();
    try {
      const user_info = await instance.post("/users", {
        id: user_id,
        username: username.value,
        email: email.value,
        password: password.value,
      });
      // if (!username.value.trim()) {
      //   alert("Vui lòng nhập họ và tên.");
      //   return;
      // }

      // if (!email.value.trim()) {
      //   alert("Vui lòng nhập Email.");
      //   return;
      // }

      // if (!emailRegex.test(email.value)) {
      //   alert("Vui lòng nhập Email hợp lệ.");
      //   return;
      // }

      if (password_check.value !== password.value) {
        alert("Mật khẩu không trùng khớp.");
        return;
      }
      localStorage.setItem("user_id", user_id);
      navigate("/todos");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="signup-content content">
      <form className="login-form" onSubmit={handleSignup}>
        <span>
          SIGN UP <br />
          Create a new account
        </span>
        <input
          type="text"
          placeholder="Họ và tên"
          className={"input-login username "}
          name="username"
        />
        <input
          type="text"
          placeholder="Email"
          className={"input-login "}
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className={"input-login "}
          name="password"
        />
        <input
          type="password"
          placeholder="Password check"
          className={"input-login password "}
          name="password_check"
        />
        <button className="input-login button" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
