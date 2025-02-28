// import React from "react";
// import {Component} from " react";

// class Venkat extends Component {
//   constructor() {
//     super();
//     this.state = { counter: 0 };
//   }

//   increment = () => {
//     this.setState = { counter: this.state.counter + 1 };
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.increment}></button>
//       </div>
//     );
//   }
// }

// export default Venkat;


// life cycle methods

// import React from "react"

// import {Component} from "react"

// class Life extends Component{
// constructor(){


//     super();

// this.state={products:[]}

// }


// componentDidMount(){



// }

// static getDerivedStatesFromProps(){

// }

// render(){

//     return(
//         <div></div>
//     )
// }





// }





//update methods


// import React from "react"
// import {Component} from "react"
// class Update extends Component{
// constructor(props) {
//     super(props);
//     this.state = { count: 0, product: null ,color:"green"};
//   }

// componentDidUpdate(prvsprops,prvsstate){


// }
// getSnapshotBeforeUpdate(prvsprops,prvsstate){

// }
// shouldComponentUpdate(){

// }
// static getDerivedStateFromProps(props,state){

// }


// render(){
//     return(


//         <div>





//         </div>
//     )
// }
// }



//context api

import React from "react"
import { createContext } from "react"
import { useState } from "react"


const userInfo=createContext()

function Context(){

const [user,setUser]=useState("yaswanth")

return(

    <div>
<userInfo.provider value={user} >




</userInfo.provider>


    </div>
)

}


















