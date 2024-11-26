import React from "react"
import plant from "./images/plant.jpg"
import Farmer from "./images/farmer.jpg"
import rose from "./images/rose.jpeg"
import ro from "./images/ro.jpeg"
import rosee from "./images/rosee.jpeg"
import ros from "./images/ros.jpeg"


import "./image.css"

function Image(){



    return(

<div  >
    
    
    <img className="image" src={plant} alt="im"/>
    <img className="image1"src={Farmer} alt="im1"/>
    <img className="image2"src={rose} alt="im3"/>
    <img className="image3"src={ro} alt="im4"/>

    
    
    </div>


    )
}


export default Image;