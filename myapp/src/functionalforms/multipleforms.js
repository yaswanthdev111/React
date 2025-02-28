// function Formss() {
//     // const [text, setText] = useState("");

//     const[result,setResult]=useState({u:"",m:"",e:""})

//     const[formData,setFormData]=useState({
//         user:"", mobile:"", email:""
//     })

//     const handleInput= (e) => {
//         const {name,value}=e.target;
//         setFormData((prev)=>({
//             ...prev,
//             [name]:value,

//         }))

//       };
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         setResult({u:formData.user,m:formData.mobile,e:formData.email})

//       };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="user" value={FormData.user} onChange={handleInput} placeholder="username"/>
//         <input type="text"   name="mobile"  value={FormData.mobile} onChange={handleInput} placeholder="mobilenumber"/>
//         <input type="email"   name="email"value={FormData.email}  onChange={handleInput} placeholder="email"/>

//         <input type="submit" />
//       </form>
//       <h1>{result.u}</h1>
//       <h1>{result.m}</h1>
//       <h1>{result.e}</h1>
//     </div>
//   );
// }



// new i did this only have to practise 




import React from "react";
import { useState } from "react";

function Formss() {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [result, setResult] = useState("");

  const Change1 = (e) => {
    setText(e.target.value);
  };
  const Change2 = (e) => {
    setText1(e.target.value);
  };
  const Submit = (e) => {
    e.preventDefault();
    setResult(text + text1);
  };

  return (
    <form onSubmit={Submit}>
      <input type="text" onChange={Change1} />
      <input type="text" onChange={Change2} />
      <input type="submit" />

      <h1>{result}</h1>
    </form>
  );
}

export default Formss;
