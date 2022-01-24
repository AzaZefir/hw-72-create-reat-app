
import "./App.css";
import pic from "../src/images.jpg";

const FirstComponent = (props) => {
  return (
    <div>
      {props.text}
      <img src={props.src} alt=''></img>
    </div>
  );
};

function App() {
  return (
    <div className="App">

        <p>Hello world!!!</p>
        <FirstComponent text="hello world component" />
        <FirstComponent img src={pic} />

    </div>
  );
}

export default App;
