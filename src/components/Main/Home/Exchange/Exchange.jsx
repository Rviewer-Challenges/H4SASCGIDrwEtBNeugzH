import React, { useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import axios from "axios";

import { useDebouncedCallback } from "use-debounce";

function Exchange (props) {

  const API_KEY = process.env.REACT_APP_EXCHANGE_APIKEY;
  const availableCurr = useFetch(`https://marketdata.tradermade.com/api/v1/live_currencies_list?api_key=${API_KEY}`)

  const [desde, setDesde] = useState("EUR");
  const [hasta, setHasta] = useState("EUR");
  const [input, setInput] = useState(0);
  const [cambio, setCambio] = useState(0);

  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [fromInput, setFromInput] = useState(true)


  //const [availableCurr, setAvailableCurr] = useState([]);
  const debounced = useDebouncedCallback(async (value) => {
    
    console.log(from + " " + to + " " + value)

    axios.get(`https://marketdata.tradermade.com/api/v1/convert?api_key=${API_KEY}&from=${from}&to=${to}&amount=${value}`)
      .then ((resultado) => {
        fromInput ? setCambio(resultado.data.total) : setInput(resultado.data.total)
      })
      .catch ((error) => {
        console.log(`Error: ${error}`);
        return 0
      })
  }, 1500);

  const handleChangeInput = (e) => {
    setFromInput(true);
    setInput(e);
    setFrom(desde.valueOf());
    setTo(hasta.valueOf());
    
    debounced(e);
  }
  const handleChangeCambio = (e) => {
    setFromInput(false);
    setCambio(e)
    setFrom(hasta.valueOf())
    setTo(desde.valueOf())
    
    debounced(e)
  }
  
  return (
    
    <div className="marcoPrincipal">
      <p className="campo">{props.value.campo.toUpperCase()}</p>
      <div className="select">
 
        <label htmlFor="desde" className="label">From:</label>
        <select className="select" value={desde} name="desde" onChange={(e) => setDesde(e.target.value)}>
          {Object.entries(availableCurr).map((option, i) => (
            <option key={i} value={option[0]}>
              {option[1]}
            </option>
          ))}
        </select>

        <label htmlFor="hasta" className="label">To:</label>
        <select className="select" value={hasta} name="hasta" onChange={(e) => setHasta(e.target.value)}>
          {Object.entries(availableCurr).map((option, i) => (
            <option key={i} value={option[0]}>
              {option[1]}
            </option>
          ))}
        </select>
        
      </div>

      <div className="camposdecambio">
          <input value={input} type="number" className="convertir" onChange={(e) => handleChangeInput(e.target.value)} onFocus={(e) => {e.target.select()}} />
          
          <input value={cambio} type="number" className="convertir" onChange={(e) => handleChangeCambio(e.target.value)} onFocus={(e) => {e.target.select()}}/>
      </div>

      <div className="unidades">
          <p className="unidad">{desde !=="" ?  desde : ""}</p>
          <p className="unidad">{hasta !=="" ?  hasta : ""}</p>
      </div>
    </div>
  )
  
}

export default Exchange;
