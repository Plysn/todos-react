import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isLogin = localStorage.getItem("isLogin");

  return !isLogin ? <Navigate to="/login" replace={true} /> : children;
}

export default PrivateRoute;
