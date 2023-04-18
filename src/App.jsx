import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import TodoList from "./pages/todolist";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todos" element={<TodoList />} />
    </Routes>
  );
}

export default App;
