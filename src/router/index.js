import Login from "../pages/login";
import Home from "../pages/home";
import TodoList from "../pages/todolist";
import SignUp from "../pages/signup";

export const pathRouters = {
  HOME: "/",
  LOGIN: "/login",
  TODOS: "/todos",
  SIGNUP: "/signup",
};

export const routers = [
  {
    path: pathRouters.LOGIN,
    element: <Login />,
    isPrivate: false,
  },
  {
    path: pathRouters.HOME,
    element: <Home />,
    isPrivate: false,
  },
  {
    path: pathRouters.TODOS,
    element: <TodoList />,
    isPrivate: true,
  },
  {
    path: pathRouters.SIGNUP,
    element: <SignUp />,
    isPrivate: false,
  },
];
