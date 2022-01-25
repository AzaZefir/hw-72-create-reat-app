import React from "react";
import "./App.scss";
import pic from "../src/images.jpg";
import StringComponent from "./components/string";
import Names from "./components/nameList";
import Counter from "./components/counter";
import Hide from "./components/hide";
import NameForm from "./components/input";
import Form from "./components/form";

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
    <div className="App">
      <p>Hello world!!!</p>
      <FirstComponent text="hello world component" />
      <FirstComponent img src={pic} />
      <StringComponent animal="animal" />
      <StringComponent beast="grizzle" />
      <Names />
      <Counter />
      <Hide />
      <NameForm />
      <Form />
    </div>
  );
}

export default App;
