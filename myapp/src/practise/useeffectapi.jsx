import React, { useEffect, useState } from "react";

function Useeffectapi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // API URL
      .then((res) => res.json()) // Convert response to JSON
      .then((json) => setData(json)); // Store data in state
  }, []);
  return (
    <div>
      <h2>Product List</h2>
      {data.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.price} USD</p>
          <img src={item.image} alt={item.title} style={{ height: "100px" }} />
        </div>
      ))}
    </div>
  );
}

export default Useeffectapi;

