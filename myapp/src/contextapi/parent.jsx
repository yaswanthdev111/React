import React from "react"
import Child from './child1'
import { useState } from "react"
import { createContext } from "react"

export const userInfo= createContext()


// propdrilling--passing parent to child1 and from child1 to Child2.Child

// propdrilling next version -contextapi--passing parent to child 2 directly if we want

function Context(){
const[user,setUser]=useState("yaswanth")

return(

    <div>
<userInfo.Provider value={user}>

<Child/>

</userInfo.Provider>
    </div>
);

  



}

export default Context