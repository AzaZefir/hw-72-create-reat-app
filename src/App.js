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
import ErrorBoundary from "./components/errorBoundary/errorboundary";
// import Switch from "./components/theme/main";

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
    <ErrorBoundary>
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
              <NavLink to="/form">Form</NavLink>
            </li>
            <li>
              <NavLink to="/toDo">TodoList</NavLink>
            </li>
          </ul>
          <hr />
          {/* <Switch/> */}
          <p>Hello world!!!</p>
          <FirstComponent text="hello world component" />
          <FirstComponent img src={pic} />
          <StringComponent animal="animal" />
          <StringComponent beast="grizzle" />
          <Routes>
            <Route path="/" element={<Names />} />

            <Route path="counter" element={<Counter />} />

            <Route path="/hide" element={<Hide />} />

            <Route path="/nameList" element={<NameForm />} />

            <Route path="/form" element={<Form />} />

            <Route path="/toDo" element={<TodoList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
