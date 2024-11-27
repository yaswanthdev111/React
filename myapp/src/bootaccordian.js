import React from "react"
import Accordion from 'react-bootstrap/Accordion';

function Accordian(props){



return(
<div>

    {/* we have to get data in accordian format so we are using accordian in bootstrap down */}

<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.title}</Accordion.Header>

        <Accordion.Body>
          <img src={props.img }alt=" " style={{height:"300px"}}></img>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>

      
</div>

)

}
export default(Accordian)