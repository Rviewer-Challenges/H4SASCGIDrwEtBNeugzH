import React, { useState } from "react";
import Units from './Units/Units.jsx';

const convert = require('convert-units');

function Home () {

  const [campo, setCampo] = useState(convert().measures()[0]);

  return (
    <div className="home">
      <p className="selecciona"><b>SELECCIONA EL CAMPO A CONVERTIR</b></p>

        <select className="select" value={campo} onChange={(e) => setCampo(e.target.value)}>
            {convert().measures().map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
            ))}
        </select> 

      {campo ? <Units value={campo}/> : null} 
    </div>
  )
}
export default Home;
