import React, { useState } from "react";

import intercambio from '../../../assets/intercambio.png';

function Velocidad () {

    const options = [
        {value: "0", text: 'Elige una unidad'},
        {value: "km/h", text: 'Km/h'},
        {value: "m/s", text: 'Metros/seg'},
        {value: "ml/h", text: 'Millas/h'}
    ];
    
    const [desde, setDesde] = useState(options[0].value);
    const [hasta, setHasta] = useState(options[0].value);

    const [input, setInput] = useState(0);
    const [cambio, setCambio] = useState(0);

    const convVelocidad = (peso) => {
        if (desde === "0" || hasta === "0") return 0 //console.log("Unidades NOK!")
        switch (desde) {
            case "gr":  // De gramos
                switch (hasta) {
                    case "gr":  // A gramos
                        return peso
                    case "Kg":  // A Kilos                    
                        return peso / 1000
                    case "T":   // A Toneladas
                        return peso / 1000000
                    case "Lb":  // A Libras
                        return peso * 0.0022
                    case "Oz":  // A Onzas
                        return peso * 0.0353
                    default:
                        console.log("Unexpected error!!")
                        break;
                }
                break;
            case "Kg":  // De Kilos
                switch (hasta) {
                    case "gr":  // A gramos
                        return peso * 1000
                    case "Kg":  // A Kilos                    
                        return peso
                    case "T":   // A Toneladas
                        return peso / 1000
                    case "Lb":  // A Libras
                        return peso * 2.2046
                    case "Oz":  // A Onzas
                        return peso * 35.2739
                    default:
                        console.log("Unexpected error!!")
                        break;
                }
                break;
            case "T":  // De Toneladas
                switch (hasta) {
                    case "gr":  // A gramos
                        return peso * 1000000
                    case "Kg":  // A Kilos                    
                        return peso * 1000
                    case "T":   // A Toneladas
                        return peso
                    case "Lb":  // A Libras
                        return peso * 2204.62
                    case "Oz":  // A Onzas
                        return peso * 35273.94
                    default:
                        console.log("Unexpected error!!")
                        break;
                }
                break;
            case "Lb":  // De libras
                switch (hasta) {
                    case "gr":  // A gramos
                        return peso * 453.59
                    case "Kg":  // A Kilos                    
                        return peso * 0.4536
                    case "T":   // A Toneladas
                        return peso * 0.000453592
                    case "Lb":  // A Libras
                        return peso
                    case "Oz":  // A Onzas
                        return peso * 16
                    default:
                        console.log("Unexpected error!!")
                        break;
                }
                break;
            case "Oz":  // De onzas
                switch (hasta) {
                    case "gr":  // A gramos
                        return peso * 28.3495
                    case "Kg":  // A Kilos                    
                        return peso * 0.0283
                    case "T":   // A Toneladas
                        return peso * 2.8*10**-5 
                    case "Lb":  // A Libras
                        return peso * 0.0625
                    case "Oz":  // A Onzas
                        return peso
                    default:
                        console.log("Unexpected error!!")
                        break;
                }
                break;
            default:
                break;
        }
    }

    const handleSelectDesde = (e) => {
        setDesde(e.target.value);
    }
    const handleSelectHasta = (e) => {
        setHasta(e.target.value);
    }

    const handleChangeDesde = (e) => {
        setInput(e.target.value)
        setCambio(convVelocidad(e.target.value))
    }
    const handleChangeHasta = (e) => {
        setCambio(e.target.value)
        setInput(convVelocidad(e.target.value))
    }

    return (
        <div className="marcoPrincipal">
            <p className="campo">Velocidad **Lanean...**</p>  
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

export default Velocidad;