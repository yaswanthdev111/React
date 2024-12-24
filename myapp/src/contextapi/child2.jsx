import React from "react"
import { useContext } from "react"
import { userInfo } from "./parent"

function Child2(){
const value=(useContext(userInfo))

return(

    <div>

<h1>{value}</h1>
<h1>BABU</h1>

    </div>
)





}

export default Child2