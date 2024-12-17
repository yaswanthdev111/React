import React from "react";
import Child from "./propschild";
import { useState } from "react";

function Props() {
  const [text, setText] = useState(0);

  const Change = (incr) => {
    switch (incr) {
      case "inc":
        setText(text + 1);
        break;

      case "dec":
        setText(text - 1);
        break;

      default:
        setText(0);
    }
  };

  return (
    <div>
      <h1>{text}</h1>
      <Child
        onClick={() => {Change("inc")}} name="INCREMENT"/>

      <Child
        onClick={() => { Change("dec") }} name="DECREMENT"  />

      <Child onClick={() => {  Change("") }}name="RESET"/>
    </div>
  );
}
export default Props;
