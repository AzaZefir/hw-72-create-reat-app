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
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Отправить" />
        {this.state.isShown && <div>{JSON.stringify(this.state)}</div>}
      </form>
    );
  }
}

export default NameForm;
