import React, { useState } from "react";
import intercambio from '../../../assets/intercambio.png';

const convert = require('convert-units');

function Velocidad () {
    
    const [desde, setDesde] = useState(convert().list("speed")[0].abbr);
    const [hasta, setHasta] = useState(convert().list("speed")[1].abbr);

    const [input, setInput] = useState(0);
    const [cambio, setCambio] = useState(0);

    const handleChangeDesde = (e) => {
        setInput(e.target.value)
        setCambio(convert(e.target.value).from(desde).to(hasta))
    }
    const handleChangeHasta = (e) => {
        setCambio(e.target.value)
        setInput(convert(e.target.value).from(hasta).to(desde))
    }

    return (
        <div className="marcoPrincipal">
            <p className="campo">Velocidad</p>  
            <div className="select">
                <label htmlFor="desde" className="label">Desde:</label>
                <select className="select" value={desde} onChange={(e) => setDesde(e.target.value)}>
                    {convert().list("speed").map((option, i) => (
                        <option key={i} value={option.abbr}>
                            {option.singular}
                        </option>
                    ))}
                </select>

                <label htmlFor="hasta" className="label">Hasta:</label>
                <select className="select" value={hasta} onChange={(e) => setHasta(e.target.value)}>
                    {convert().list("speed").map((option, i) => (
                        <option key={i} value={option.abbr}>
                            {option.singular}
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
                <p className="unidad">{desde !=="" ?  desde : ""}</p>
                <p className="unidad">{hasta !=="" ?  hasta : ""}</p>
            </div>
        </div>
    )
}

export default Velocidad;
