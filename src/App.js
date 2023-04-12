import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./css/styles.css";
// import { render } from "@testing-library/react";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState([]);

  function addTodo(todo) {
    // console.log("todo:", todo);
    setState((prev) => [...prev, todo]);
    // localStorage.setItem("todos", JSON.stringify([todos]));
  }
  // console.log(state);
  function deleteTodo(id) {
    console.log(id);
    const newTodos = state.filter((todo) => todo.id !== id);
    setState(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  return (
    <div id="test">
      <Header addTodo={addTodo} />
      <TodoList todos={state} deleteTodo={deleteTodo} />
    </div>
  );
}

// class App extends React.PureComponent {
//   // let text = input.value.trim();
//   // let id = new Date().toISOString();

//   state = {
//     todos: [
//       {
//         id: 1,
//         text: 'Learn',
//         completed: true
//       },
//       {
//         id: 2,
//         text: 'Play',
//         completed: true
//       }
//     ],
//   }

//   render() {
//     const {todos} = this.state

//     return (
//       <div id="test">
//         <Header />
//         <TodoList todos = {todos}/>
//       </div>
//     );
//   }
// }

export default App;
