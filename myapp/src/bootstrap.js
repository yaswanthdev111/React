import React from "react";
 import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";




  
  


function Bootstrap(Props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Props.img } alt="babu"style={{height:"100px"}} />
        <Card.Body>
          <Card.Title>{Props.title}</Card.Title>
          <Card.Text>{Props.desc}</Card.Text>
          <Button variant="primary">{Props.info}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Bootstrap;
