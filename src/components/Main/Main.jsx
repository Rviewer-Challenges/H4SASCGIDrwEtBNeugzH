import React from "react";
import termometro from '../../images/termometro.png';

function Main () {
  return (
    <div className="main">
      <p>CONVERTER</p>
      <div className="icono">
        <img src={termometro} alt="temperatura" id="termometro"/>
      </div>
    </div>
  )
}

export default Main;
