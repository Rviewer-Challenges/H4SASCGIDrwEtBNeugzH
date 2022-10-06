import React, { useState } from "react";

const convert = require('convert-units');


function Units (props) {

  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");
  const [input, setInput] = useState(0);
  const [cambio, setCambio] = useState(0);

  const handleChangeDesde = (e) => {
    setInput(e.target.value)
    setCambio((convert(e.target.value).from(desde).to(hasta)).toFixed(3))
  }
  const handleChangeHasta = (e) => {
    setCambio(e.target.value)
    setInput((convert(e.target.value).from(hasta).to(desde)).toFixed(3))
  }

  return (
    
    <div className="marcoPrincipal">
      <p className="campo">{props.value.toUpperCase()}</p>
      <div className="select">
          <label htmlFor="desde" className="label">Desde:</label>
          <select className="select" value={desde} onChange={(e) => setDesde(e.target.value)}>
              {convert().list(props.value).map((option, i) => (
                  <option key={i} value={option.abbr}>
                      {option.singular}
                  </option>
              ))}
          </select>

          <label htmlFor="hasta" className="label">Hasta:</label>
          <select className="select" value={hasta} onChange={(e) => setHasta(e.target.value)}>
              {convert().list(props.value).map((option, i) => (
                  <option key={i} value={option.abbr}>
                      {option.singular}
                  </option>
              ))}
          </select> 
      </div>

      <div className="camposdecambio">
          <input value={input} type="number" className="convertir" onChange={(e) => handleChangeDesde(e)} onFocus={(e) => {e.target.select()}} />
          
          <input value={cambio} type="number" className="convertir" onChange={(e) => handleChangeHasta(e)} onFocus={(e) => {e.target.select()}}/>
      </div>

      <div className="unidades">
          <p className="unidad">{desde !=="" ?  desde : ""}</p>
          <p className="unidad">{hasta !=="" ?  hasta : ""}</p>
      </div>
    </div>
  )
  
}

export default Units;
