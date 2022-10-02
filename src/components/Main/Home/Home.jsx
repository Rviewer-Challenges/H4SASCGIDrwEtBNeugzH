import React from "react";

import { Link } from "react-router-dom";

import temperatura from '../../../assets/termometro.png';
import exchange from '../../../assets/exchange2.png';
import peso from '../../../assets/peso.png';
import velocidad from '../../../assets/velocidad.png';
import distancia from '../../../assets/distancia.png';
import volumen from '../../../assets/volumen.png';

function Home () {
  return (
    <div className="home">
      <p className="selecciona">SELECCIONA EL CAMPO A CONVERTIR</p>
      {/* <div className="campos">
        <p>PRUEBA DE CAMPOS</p> */}
        <div className="iconos">
          <Link /* img={temperatura} */ className="boton" to='/Temperatura'><img src={temperatura} alt="temperatura" id="temperatura"/></Link>
          <Link to='/Exchange' img={exchange} className="boton"><img src={exchange} alt="exchange" id="exchange"/></Link>
          <Link to='/Peso' img={peso} className="boton"><img src={peso} alt="peso" id="peso"/></Link>
          <Link to='/Velocidad' img={velocidad} className="boton"><img src={velocidad} alt="velocidad" id="velocidad"/></Link>
          <Link to='/Distancia' img={distancia} className="boton"><img src={distancia} alt="distancia" id="distancia"/></Link>
          <Link to='/Volumen' img={volumen} className="boton"><img src={volumen} alt="volumen" id="volumen"/></Link>
        </div>
      {/* </div> */}
      {/* <div className="converterArea">
        <p>UNIT CONVERTER</p>
        <div className="from">
          <label htmlFor="desde">Desde: </label><input type="text" name="desde"/> <input type="number" />
        </div>
        <div className="to">
          Resultado:
        </div>

      </div> */}
    </div>
  )

}

export default Home;
