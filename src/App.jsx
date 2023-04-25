import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./route/PrivateRoute";
import { routers } from "./router";

function App() {
  return (
    <Routes>
      {routers.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={
              route.isPrivate ? (
                <PrivateRoute>{route.element}</PrivateRoute>
              ) : (
                route.element
              )
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
