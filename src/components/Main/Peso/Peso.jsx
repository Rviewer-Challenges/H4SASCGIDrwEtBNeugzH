import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import intercambio from '../../../assets/intercambio.png';

function Peso () {

    const [input, setInput] = useState("");
    const [cambio, setCambio] = useState("");

    const convTemperatura = (temperatura) => {
        return temperatura *= 1.2;
    
    }

    const debounced = useDebouncedCallback((value) => {
        console.log(value.target.value);
        setInput(value.target.value);
        console.log(input);
        setCambio(convTemperatura(value.target.value))
        //setCambio(value.target.value * 1.2);
        //value.target.value = "";
      }, 1000);

    return (
        <div className="temperatura">
            <p>Peso</p>
            <div className="camposdecambio">
                <input type="text" className="convertir" name="convertir1" id="convertir1" onChange={(e) => debounced(e)} />
                <button><img src={intercambio} alt="intercambio" className="intercambio" id="intercambio" /></button>
                <input defaultValue={cambio} type="text" className="convertir" name="convertir2" id="convertir2" />
            </div>

            <div className="unidades">

                <label htmlFor="desde">Desde:</label>
                <select name="desde" id="desde">
                    <option value="gr">Gramos</option>
                    <option value="lb">Libras</option>
                    <option value="oz">Onzas</option> 
                </select>

                <label htmlFor="hasta">Hasta:</label>
                <select name="hasta" id="hasta">
                    <option value="gr">Gramos</option>
                    <option value="lb">Libras</option>
                    <option value="oz">Onzas</option>
                </select>
            </div>
        </div>
    )

}

export default Peso;
