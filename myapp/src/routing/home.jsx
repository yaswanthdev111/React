import React, { useEffect, useState } from "react"



useEffect=()=>{


    console.log("HOME MOUNTED")

}
useEffect=()=>{

return ()=>{console.log("HOME UNMOUNTED")}
}

function Home(){



    return(

        <div>HOME</div>
    )
}

export default Home