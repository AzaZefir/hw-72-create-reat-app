import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      s1: 0,
    };
  }

  buttonHandler = () => {
    let value = this.state.s1;

    value++;
    this.setState({ s1: value });
  };
  buttonHandler2 = () => {
    let value = this.state.s1;
    value--;
    this.setState({ s1: value });
  };
  onChangeHandler = (e) => {
    let value = e.target.value;
    this.setState({ s1: value });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.buttonHandler}>+</button>
          <input
            type="number"
            onChange={this.onChangeHandler}
            value={this.state.s1}
          />
          <button onClick={this.buttonHandler2}>-</button>
        </div>
        {/* <div >
                    {this.state.s1}
                </div><div>
                    {this.state.s2}
                </div> */}
      </div>
    );
  }
}

// const Counter = ({ count, setCount }) => {

//     return (
//         <div>
//             <button onClick={()=> count > 0 && setCount(count++)}>+</button>
//             <input type="number" onChange={e => setCount(e.target.value)} value={count}/>
//             <button onClick={()=> count < 30 && setCount(count --)}>-</button>
//         </div>
//     )
// }

export default Counter;
