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
      <div className="iconos">
        <Link to='/Temperatura' className="boton"><img src={temperatura} alt="temperatura"/></Link>
        <Link to='/Exchange' className="boton"><img src={exchange} alt="exchange"/></Link>
        <Link to='/Peso' className="boton"><img src={peso} alt="peso"/></Link>
        <Link to='/Velocidad' className="boton"><img src={velocidad} alt="velocidad"/></Link>
        <Link to='/Distancia' className="boton"><img src={distancia} alt="distancia"/></Link>
        <Link to='/Volumen' className="boton"><img src={volumen} alt="volumen"/></Link>
      </div>
    </div>
  )
}

export default Home;
