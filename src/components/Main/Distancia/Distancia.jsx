import React, { useState } from "react";

import intercambio from '../../../assets/intercambio.png';

function Distancia () { //osorik EGITEKO!!!!

  const options = [
    {value: "0", text: 'Elige una unidad'},
    {value: "C", text: 'Celsius'},
    {value: "F", text: 'Fahrenheit'},
    {value: "K", text: 'Kelvin'}
  ];

  const [desde, setDesde] = useState(options[0].value);
  const [hasta, setHasta] = useState(options[0].value);

  const [input, setInput] = useState(0);
  const [cambio, setCambio] = useState(0);
  

  const convTemperatura = (temperatura) => {
    console.log(temperatura)
    console.log("input: " + input + " cambio: " + cambio + "\n desde: " + desde + " hasta: " + hasta);
    if (desde === "0" || hasta === "0") return 0 //console.log("Unidades NOK!")
    switch (desde) {
      case "C": // De Celsius
        switch (hasta) {
          case "C": // A Celsius
            return temperatura;
          case "F": // A Fahrenheit
            console.log(temperatura * 1.8 +32)
            return (temperatura * 1.8 + 32)
          case "K": // A Kelvin
            return (parseFloat(temperatura) + parseFloat(273.15));
          default:
            break;
        }
        break;
      case "F": // De Fahrenheit
        switch (hasta) {
          case "C": // A Celsius
            return ((temperatura - 32) / 1.8);
          case "F": // A Fahrenheit
            return temperatura;
          case "K": // A Kelvin
            return (temperatura - 32) / 1.8 + 273.15
          default:
            break;
        }
        break;
      case "K": // De Kelvin
        switch (hasta) {
          case "C": // A Celsius
            return (parseFloat(temperatura) - parseFloat(273.15));
          case "F": // A Fahrenheit
            return 1.8 * (temperatura - 273.15) + 32
          case "K": // A Kelvin
            return temperatura;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }

  const handleSelectDesde = (e) => {
    setDesde(e.target.value);
    setInput(0);
    setCambio(0); 

  }
  const handleSelectHasta = (e) => {
    setHasta(e.target.value);
    setInput(0);
    setCambio(0);
  }

  const handleChangeDesde = (e) => {
    setInput(e.target.value)
    setCambio(convTemperatura(e.target.value))
  }
  const handleChangeHasta = (e) => {
    setCambio(e.target.value)
    setInput(convTemperatura(e.target.value))
  }

  return (
    <div className="marcoPrincipal">
      <p className="campo">Distancia **Lanean...**</p> 
      <div className="select">
        <label htmlFor="desde" className="label">Desde:</label>
        <select className="select" value={desde} onChange={handleSelectDesde}>
            {options.map(option => (
            <option key={option.value} value={option.value}>
                {option.text}
            </option>
            ))}
        </select>

        <label htmlFor="hasta" className="label">Hasta:</label>
        <select className="select" value={hasta} onChange={handleSelectHasta}>
            {options.map(option => (
            <option key={option.value} value={option.value}>
                {option.text}
            </option>
            ))}
        </select> 
      </div>
    
      <div className="camposdecambio">
          <input value={input} type="text" className="convertir" onChange={(e) => handleChangeDesde(e)} onFocus={(e) => {e.target.select()}} />
          <button><img src={intercambio} alt="intercambio" className="intercambio"/></button>
          <input value={cambio} type="text" className="convertir" onChange={(e) => handleChangeHasta(e)} onFocus={(e) => {e.target.select()}}/>
      </div>

      <div className="unidades">
          <p className="unidad">{desde !=="0" ?  desde : ""}</p>
          <p className="unidad">{hasta !=="0" ?  hasta : ""}</p>
      </div>
    </div>
  )
  
}

export default Distancia;
