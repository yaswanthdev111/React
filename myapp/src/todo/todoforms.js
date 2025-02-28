import React, { Component } from "react";
class Todo extends Component {
  constructor() {
    super();
    this.state = { name: "", output: "" };
  }

  HandleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  Submit = (event) => {
    event.preventDefault();
    this.setState({ output: this.state.name });
    
  };

  render() {
    return (
      <div>
        <form onSubmit={this.Submit}>
          <input type="text" name="Todo" onChange={this.HandleChange} />
          <input type="submit" />
        </form>
        <h1>{this.state.output}</h1>
      </div>
    );
  }
}
export default Todo;
