import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      value1: event.target.value * 0.5,
      value2: event.target.value * 0.05,
    });
  }

  handleSubmit(event) {
    this.setState({ isShown: true });
    event.preventDefault();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input className="formtext"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input className="formtext" type="submit" value="Отправить" />
        {this.state.isShown && <div>{JSON.stringify(this.state)}</div>}
      </form>
    );
  }
}
/* <form>
<label>
  Имя:
  <input
    type="text"
    value={this.state.value}
    onChange={this.handleChange}
  />
</label>
<input type="submit" value="Отправить" onClick={this.handleSubmit} />
{this.state !== "" && this.state.isShown ? (
  <div>
    <span>{this.state.isShown}</span>
    <span>{this.state.value}</span>
    <hr/>
    <span>{this.state.value *0.5}</span>
    <hr/>
    <span>{this.state.value *.05}</span>
  </div>
) : (
  ""
)}
</form> */



export default NameForm;
