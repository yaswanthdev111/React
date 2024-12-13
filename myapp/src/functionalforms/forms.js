import React from "react";
import { useState } from "react";





function Forms() {
    const [text, setText] = useState("");
    const[result,setResult]=useState("")


    const Forms = (e) => {
        setText(e.target.value);

      };
      const handleSubmit = (e) => {
        e.preventDefault();
      setResult(text)
      
      };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"  onChange={Forms} />
        
        <input type="submit" />
      </form>
      <h1>{result}</h1>
    </div>
  );
}

export default Forms;
