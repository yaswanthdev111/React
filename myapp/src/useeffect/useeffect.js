import React from "react";
import { useState, useEffect } from "react";
import { data } from "react-router-dom";

function Useeffect() {
  const [Data, SetData] = useState(0);
  const [button, setButton] = useState("hi");

  const HandleChange = () => {
    setButton(button + "YASWANTH");
    
  };

  useEffect(() => {
    // SetData(Data + 1);
    // console.log(Data)
    SetData(Data +1);
  },[button]);

  
  return (
    <div>
      <h1>{Data}</h1>
      <h1>{button}</h1>

      <button onClick={HandleChange}>CLICK ME</button>
    </div>
  );
}

export default Useeffect;
