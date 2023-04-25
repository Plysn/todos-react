import Login from "../pages/login";
import Home from "../pages/home";
import TodoList from "../pages/todolist";

export const pathRouters = {
  HOME: "/",
  LOGIN: "/login",
  TODOS: "/todos",
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
];
