import React, { useState } from "react";

const convert = require('convert-units');

function Units (props) {

  const [desde, setDesde] = useState(props.value.desde);
  const [hasta, setHasta] = useState(props.value.hasta);
  const [input, setInput] = useState(0);
  const [cambio, setCambio] = useState(0);

  const handleChangeInput = (e) => {
    setInput(e.target.value);
    setCambio((convert(e.target.value).from(desde).to(hasta)).toFixed(3))
  }
  const handleChangeCambio = (e) => {
    setCambio(e.target.value)
    setInput((convert(e.target.value).from(hasta).to(desde)).toFixed(3))
  }

  return (  
    <div className="marcoPrincipal">
      <p className="campo">{props.value.campo.toUpperCase()}</p>
      <div className="select">
        <label htmlFor="desde" className="label">From:</label>
        <select className="select" value={desde} name="desde" onChange={(e) => setDesde(e.target.value)}>
          {convert().list(props.value.campo).map((option, i) => (
            <option key={i} value={option.abbr}>
              {option.singular}
            </option>
          ))}
        </select>

        <label htmlFor="hasta" className="label">To:</label>
        <select className="select" value={hasta} onChange={(e) => setHasta(e.target.value)}>
            {convert().list(props.value.campo).map((option, i) => (
                <option key={i} value={option.abbr}>
                    {option.singular}
                </option>
            ))}
        </select> 
      </div>

      <div className="camposdecambio">
          <input value={input} type="number" className="convertir" onChange={(e) => handleChangeInput(e)} onFocus={(e) => {e.target.select()}} />
          
          <input value={cambio} type="number" className="convertir" onChange={(e) => handleChangeCambio(e)} onFocus={(e) => {e.target.select()}}/>
      </div>

      <div className="unidades">
          <p className="unidad">{desde !=="" ?  desde : ""}</p>
          <p className="unidad">{hasta !=="" ?  hasta : ""}</p>
      </div>
    </div>
  )
}

export default Units;

