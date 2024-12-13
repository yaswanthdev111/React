import React from "react"
import {useState} from "react"

function Functional(){



    const [text,setText]=useState("VENKATA")

const change=()=>{

setText("YASWANTH BABU")

}
const change1=()=>{

    setText("GUTLAPALLI")
}
    return(

        <div>
            <h1>{text}</h1>
<button onClick={change}>CLICK ME</button>
<button onClick={change1}>CLICK ME</button>


        </div>
    )
}
export default Functional;