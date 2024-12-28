import React from "react";
import { Link } from "react-router-dom";


function Dynamic() {
  const movies = [
    { id: "1", movie: "pushpa", cast: ["AA", "SUNIL", "SUKUMAR", "RASHMIKA"] },

    { id: "2", movie: "pushpa 2", cast: ["AA", "SUNIL", "SUKUMAR", "RASHMIKA"] },
    { id: "3", movie: "DEVARA", cast: ["NTR", "SIVA", "JAGAPATHIBABU", "JANVI"] },
    { id: "4", movie: "BAHUBALI", cast: ["PRABHAS", "RAJAMOULI", "RANA", "ANUSHKA"] },
  ];

  return <div>



    {movies.map((a,b)=>

<ul>
<li key={b}><Link>{a.movie}</Link></li>


</ul>


)}
  </div>;

  
}

export default Dynamic;
