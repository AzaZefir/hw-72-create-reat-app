import React from "react";
import "./App.scss";
import pic from "../src/img/images.jpg";
import StringComponent from "./components/string";
import Names from "./components/nameList";
import Counter from "./components/counter";
import Hide from "./components/hide";
import NameForm from "./components/input";
import Form from "./components/form/form";
import TodoList from "./components/toDo/TodoList";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

const FirstComponent = (props) => {
  return (
    <div>
      {props.text}
      <img src={props.src} alt=""></img>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            <NavLink to="/">Names</NavLink>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/hide">Hide</NavLink>
          </li>
          <li>
            <NavLink to="/nameList">NameForm</NavLink>
          </li>
          <li>
            <NavLink to="/components/form">Form</NavLink>
          </li>
          <li>
            <NavLink to="/components/toDo">TodoList</NavLink>
          </li>
        </ul>
        <hr />
        <p>Hello world!!!</p>
        <FirstComponent text="hello world component" />
        <FirstComponent img src={pic} />
        <StringComponent animal="animal" />
        <StringComponent beast="grizzle" />
        <Routes>
          <Route path="/" element={<Names />} />
        </Routes>
        <Routes>
          <Route path="/counter" element={<Counter />} />
        </Routes>
        <Routes>
          <Route path="/hide" element={<Hide />} />
        </Routes>
        <Routes>
          <Route path="/nameList" element={<NameForm />} />
        </Routes>
        <Routes>
          <Route path="/components/form" element={<Form />} />
        </Routes>
        <Routes>
          <Route path="/components/toDo" element={<TodoList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
