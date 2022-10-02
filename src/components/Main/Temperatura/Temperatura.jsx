import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import intercambio from '../../../assets/intercambio.png';

function Temperatura () {

  const [input, setInput] = useState(0);
  const [cambio, setCambio] = useState(0);
  const [desde, setDesde] = useState("C");
  const [hasta, setHasta] = useState("F");

  const convTemperatura = (temperatura) => {
    console.log(temperatura);
    console.log(desde);
    console.log(hasta);
    switch (desde) {
      case "C": // De Celsius
        switch (hasta) {
          case "C": // A Celsius
            return temperatura;
          case "F": // A Fahrenheit
            console.log("aki estamos")
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

  const debounced = useDebouncedCallback((value) => {
    console.log(value.target.value);
    //console.log(desde.value)
    setInput(value.target.value);
    console.log(input);
    setCambio(convTemperatura(value.target.value))
    console.log(cambio)
    //setCambio(value.target.value * 1.2);
    //value.target.value = "";
  }, 500);

  const handleChangeDesde = e =>{
    console.log(e.target.value);
    setDesde(e.target.value);
    console.log(desde);
  };
  const handleChangeHasta = e =>{
    console.log(e.target.value);
    setHasta(e.target.value);
    console.log(hasta);
  };

  return (
    <div className="temperatura">
      <p>Temperatura</p> 
      <div className="camposdecambio">
        <input defaultValue={input} type="text" className="convertir" onChange={(e) => debounced(e)} name="convertir1" id="convertir1" />
        <button><img src={intercambio} alt="intercambio" className="intercambio" id="intercambio" /></button>
        <input defaultValue={cambio} value={cambio} type="text" className="convertir" name="convertir2" id="convertir2" />
      </div>

      <div className="unidades">

        <label htmlFor="desde">Desde:</label>
        <select name="desde" id="desde" onChange={(e) => handleChangeDesde(e)}>
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option> 
        </select>

        <label htmlFor="hasta">Hasta:</label>
        <select name="hasta" id="hasta" onChange={(e) => handleChangeHasta(e)}>
          <option value="F">Fahrenheit</option>
          <option value="C">Celsius</option>
          <option value="K">Kelvin</option>
        </select>
      </div>
    </div>
  )
  
}

export default Temperatura;
