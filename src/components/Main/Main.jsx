import React from "react";

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
    </div>
  )

}

export default Main;
