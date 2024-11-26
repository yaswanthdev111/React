import React from "react";

function Header() {
  return (
    <div style={{border:"4px solid red",backgroundColor:"yellow",display:"flex",justifyContent:"space-evenly"}}>
      <li>HOME</li>
      <li>LOGIN</li>
      <li>SIGNUP</li>
      <li>LOGOUT</li>
    </div>
  );
}
export default Header;