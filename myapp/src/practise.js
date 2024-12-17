// conditional styling: true means 1 color or false means other color

import { Component } from "react";
import "./practise.css";
import Iphone from "./images/iphone.webp";
import Laptop from "./images/laptop.webp";
import Iwatch from "./images/iwatch.jpeg";

const products = [
  {
    productName: "Iphone",
    productPrice: 55000,
    productImage: Iphone,
    productAvailability: true,
  },

  {
    productName: "Laptop",
    productPrice: 55000,
    productImage: Laptop,
    productAvailability: true,
  },
  {
    productName: "Iwatch",
    productPrice: 25000,
    productImage: Iwatch,
    productAvailability: false,
  }
];

class Practise extends Component {
  render() {
    return (
      <div className="mainbox">
        <div
          className={
            products[0].productAvailability ? "available" : "unavailable"
          }
        >
          <h1> {products[0].productName}</h1>
          <img src={products[0].productImage} alt="" />
          <h1> {products[0].productPrice}</h1>
        </div>

        <div
          className={
            products[1].productAvailability ? "available" : "unavailable"
          }
        >
          <h1> {products[1].productName}</h1>
          <img src={products[1].productImage} alt="" />
          <h1> {products[1].productPrice}</h1>
        </div>

        <div
          className={
            products[2].productAvailability ? "available" : "unavailable"
          }
        >
          <h1>{products[2].productName}</h1>
          <img src={products[2].productImage} alt="" />
          <h2>{products[2].productPrice}</h2>
        </div>
      </div>
    );
  }
}

export default Practise;
