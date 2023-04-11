import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./css/styles.css";
// import { render } from "@testing-library/react";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState([
    {
      id: 1,
      text: "Learn",
      completed: true,
    },
    {
      id: 2,
      text: "Play",
      completed: true,
    },
  ]);
  return (
    <div id="test">
      <Header />
      <TodoList todos={state} />
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
