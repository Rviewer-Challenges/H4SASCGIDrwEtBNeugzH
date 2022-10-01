import React from "react";

import termometro from '../../images/termometro.png';



function Main () {
  return (
    <div className="main">
      Main
      <div className="converterArea">
        <p>UNIT CONVERTER</p>
        <div className="from">
          <label htmlFor="desde">Desde: </label><input type="text" name="desde"/> <input type="number" />
        </div>
        <div className="to">
          Resultado:
        </div>

      </div>
      <div className="main">
      <p>CONVERTER</p>
      <div className="icono">
        <img src={termometro} alt="temperatura" id="termometro"/>
      </div>
    </div>
    </div>
  )

}

export default Main;
