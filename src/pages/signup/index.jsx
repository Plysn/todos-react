import { useNavigate } from "react-router-dom";
import instance from "../../services/baseApi";
import { pathRouters } from "../../router";
import { useForm, Controller } from "react-hook-form";
import signupSchema from "../../validation/signup";
import { yupResolver } from "@hookform/resolvers/yup";

function SignUp() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      password_check: "",
    },
    resolver: yupResolver(signupSchema),
  });
  const navigate = useNavigate();

  async function handleSignup(values) {
    const { email, username, password, password_check } = values;
    const userId = new Date().toISOString();

    try {
      const { data: listUser } = await instance.get("/users");
      const isExisted = listUser.some((user) => user.email === email);
      if (isExisted) {
        setError("email", { message: "Email đã tồn tại." });
        return;
      }
      const user_info = await instance.post("/users", {
        id: userId,
        username: username,
        email: email,
        password: password,
      });
      localStorage.setItem("user_id", userId);
      navigate(pathRouters.TODOS);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="signup-content content">
      <form
        className="login-form"
        onSubmit={handleSubmit(handleSignup)}
        autoComplete="off"
      >
        <span>
          SIGN UP <br />
          Create a new account
        </span>
        <Controller
          name="username"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <input
              {...rest}
              placeholder="Họ và tên"
              className={`input-login username ${
                errors.username?.message ? "input-error" : ""
              }`}
            />
          )}
        />
        {errors.username?.message && (
          <span className="login-error">{errors.username.message}</span>
        )}
        <Controller
          name="email"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <input
              {...rest}
              placeholder="Email"
              className={`input-login username ${
                errors.email?.message ? "input-error" : ""
              }`}
            />
          )}
        />
        {errors.email?.message && (
          <span className="login-error">{errors.email.message}</span>
        )}
        <Controller
          name="password"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <input
              {...rest}
              type="password"
              placeholder="Password"
              className={`input-login username ${
                errors.password?.message ? "input-error" : ""
              }`}
            />
          )}
        />
        {errors.password?.message && (
          <span className="login-error">{errors.password.message}</span>
        )}
        <Controller
          name="password_check"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <input
              {...rest}
              type="password"
              placeholder="Password check"
              className={`input-login password ${
                errors.password_check?.message ? "input-error" : ""
              }`}
            />
          )}
        />
        {errors.password_check?.message && (
          <span className="login-error">{errors.password_check.message}</span>
        )}
        <button className="input-login button" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
