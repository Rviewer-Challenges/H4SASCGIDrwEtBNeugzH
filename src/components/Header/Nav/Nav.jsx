import React from "react";
import { Link } from 'react-router-dom';

function Nav () {
  return(
    <div className="nav">
      <Link className="bt_Nav" id="bt_moneda">Moneda</Link>
      <button className="bt_Nav" id="bt_distancia">Distancia</button>
      <button className="bt_Nav" id="bt_fluidos">Fluidos</button>
      <button className="bt_Nav" id="bt_masas">Masas</button>
    </div>
  )
}

export default Nav;
