import React, { Component } from "react";
import Bootstrap from "../bootstrap";

class Life extends Component {
  constructor() {
    super();
    this.state = { products: [] };
  }
  componentDidMount() {   
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ products: json });
      });
  }
  static getDerivedStateFromProps() {}
  render() {
    return(

        <div>

            <div style={{display:"flex",flexWrap:"wrap"}}>{this.state.products.map((a,b)=>{

                return(
                    <h1>{<Bootstrap img={a.image} title={a.title} desc={a.description}/>}</h1>
                )
            })}</div>
        </div>
    )
      
  }
}

export default Life
