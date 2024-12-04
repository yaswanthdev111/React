import React from "react"

import User from './user'


import Admin from './admin'

function Parent(props){


    return(
<div>
{props.login==="Admin"?<Admin/>:<User/>}



</div>


    )
}
export default Parent