import React from "react"


function Child(props){

console.log("rendering-child")


    return(
<div>
<h1>{props.value}</h1>


</div>



    )
}
export default React.memo (Child)