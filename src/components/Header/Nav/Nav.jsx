import React from "react";
import { Link } from 'react-router-dom';

function Nav () {
  return(
    <nav className="nav">
      <Link to="/"><button type="button" className="bt_Nav">Home</button></Link>
      <Link to="/Temperatura"><button type="button" className="bt_Nav">Temperatura</button></Link>
      <Link to="/Exchange"><button type="button" className="bt_Nav">Exchange</button></Link>
      <Link to="/Peso"><button type="button" className="bt_Nav">Peso</button></Link>
      <Link to="/Velocidad"><button type="button" className="bt_Nav">Velocidad</button></Link>
      <Link to="/Distancia"><button type="button" className="bt_Nav">Longitud</button></Link>
      <Link to="/Volumen"><button type="button" className="bt_Nav">Volumen</button></Link>
    </nav>
  )
}

export default Nav;
