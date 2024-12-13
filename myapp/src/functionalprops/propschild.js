import React from "react"

function Child(props){



    return(
<div>
<button onClick={props.onClick}>{props.name}</button>

</div>

    )
}

export default Child