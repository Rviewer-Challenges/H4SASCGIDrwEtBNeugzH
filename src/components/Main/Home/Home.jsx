import React, { useState } from "react";
import Units from './Units/Units.jsx';
import Exchange from './Exchange/Exchange.jsx';

const convert = require('convert-units');

function Home () {

  

  const [campo, setCampo] = useState(convert().measures()[0]);
  //const [campo, setCampo] = useState();
  //const [data, setData] = useState("length");
  //const [data, setData] = useState({campo: campo, desde: convert().list(campo)[0].abbr, hasta: convert().list(campo)[1].abbr});
  const [data, setData] = useState({
                            campo: "length",
                            desde: "mm2",
                            hasta: "mm2"
                          });

  const handleChange = (event) => {
    event.preventDefault();
    setCampo(event.target.value);
    (event.target.value) === "currency" ? 
      setData({campo: "currency"}) :
      setData({campo: event.target.value, desde: convert().list(event.target.value)[0].abbr, hasta: convert().list(event.target.value)[1].abbr})
  }

  return (
    <div className="home">
      <p className="selecciona"><b>SELECT CONVERTION TYPE:</b></p>
      <select className="select" value={campo} onChange={(e) => handleChange(e)}>
          {convert().measures().map((option, i) => (
            <option key={i} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
          <option key="currency" value="currency">
            CURRENCY
          </option>
      </select> 

      {campo === "currency" ?
        <Exchange value={data}/> :
        <Units value={data}/>}
    </div>
  )
}
export default Home;
