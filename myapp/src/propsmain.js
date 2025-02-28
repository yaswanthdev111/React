
// 1.  IN REACT PROPS ARE USED FOR PROPERTIES WHICH ARE USED TO PASS FROM ONE COMPONENT FROM OTHER COMPONENT (PARENT)
//  TO OTHER COMPONENT(CHILD).ARE

//  2. WE CAN ACESS PROPS IN 2 WAYS:

//  1 WAY-  DIRECTLY USED KEYWORD(PROPS) AS PARAMETER 

//  2 WAY-   CHILDREN PROPS 

// in class we have to use this.props name


// import React from "react"

// // // this is 1st method with props

// import Props from "./props.js"
// function Pro(){
//     return(
 
// <Props  name="G.Yaswanth" institute="10K CODERS"/>
//     )
// }
// export default Pro




//this is 2nd method calling props with CHILDREN.


import Children from "./propschildren"


function Pro(){


    return(

        <div>

<Children>
    
    <h1>YASWANTH IS A GOOD DEVELOPER</h1>
    
    </Children> 


        </div>
    )
}
export default Pro
