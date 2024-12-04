import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  Increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  Increment1 = () => {
    this.setState({ counter: this.state.counter + 5 });
  };
  Increment2 = () => {
    this.setState({ counter: this.state.counter - 5 });
  };
  Increment3 = () => {
    this.setState({ counter: this.state.counter + 2 });
  };

  Increment4 = () => {
    this.setState({ counter: this.state.counter - 2 });
  };
  Increment5 = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={this.Increment}>+1</button>
        <button onClick={this.Increment5}>-1</button>
        <button onClick={this.Increment1}>+5</button>
        <button onClick={this.Increment2}>-5</button>
        <button onClick={this.Increment3}>+2</button>
        <button onClick={this.Increment4}>-2</button>
      </div>
    );
  }
}
export default State;
