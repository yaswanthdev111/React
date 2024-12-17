import React from "react";
import { useState } from "react";
import Child from "./purechild";

function Pure() {
  const [value, setValue] = useState(0);
  const [random, setRandom] = useState(0);

  const handleChange = () => {
    setValue(value + 1);
  };
  const handleRandom = () => {
    setRandom(Math.random());
  };

  return (
    <div>
      
    <h1>{random}</h1>
    
      <button onClick={handleChange}>INCREMENT</button>
      <button onClick={handleRandom}>Random</button>

      <h1>
        <Child value={value} />
      </h1>
    </div>
  );
}

export default Pure;
