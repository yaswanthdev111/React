import React, { Component } from "react";
import Bootstrap from "../bootstrap";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, product: null ,color:"green"};
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  componentDidUpdate(prvsProps, prvsState) {
    // console.log(prvsState.count, "prvsState");
    // console.log(this.state.count, "currentstate");
    if (prvsState.count !== this.state.count) {
      console.log(`count value updated by ${this.state.count}`);

      fetch(`https://fakestoreapi.com/products/${this.state.count}`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          this.setState({ product: json });
        });
    }
  }

  getSnapshotBeforeUpdate(prvsProps, prvsState) {
    
    return null;
  }

  shouldComponentUpdate() {
    return true;
  }
static getDerivedStateFromProps(props,state){

return {color:props.color}
}
  render() {
    return (
      // const {count}=This.state;
      <>
        <h1 style={{color:this.state.color}}>{this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement} disabled={this.state.count < 0}>
          decrement
        </button>
        {console.log(this.state.product)}
        <div >
          {this.state.product?
        <Bootstrap

          img={this.state.product.image}
          title={this.state.product.title}
          desc={this.state.product.description}
         
        />:<h1>NO CARD</h1>}
         </div>
      </>

    );
  }
}

export default Update;
