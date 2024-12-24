import React, { useEffect, Component, useState } from "react";

function Home() {

//  class component lo un mount

    useEffect(() => {
        console.log("home mounted");
      },[]);

      useEffect(() => {
        return () => {
          console.log("HOME UNMOUNTED");
        };
      });

  return( <div>HOME</div>);
}

export default Home;


// class component lo unmount State

// class Home extends Component {
//   componentDidMount() {
//     console.log("home mounted");
//   }

//   componentWillUnmount() {
//     console.log("home unmounted");
//   }

//   render() {
//     return (
//       <div>
//         <h1>home</h1>
//       </div>
//     );
//   }
// }
// export default Home;
