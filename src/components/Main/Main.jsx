import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
/* 
import Units from "./Home/Units/Units";
import Temperatura from './Temperatura/Temperatura';
import Exchange from './Exchange/Exchange';
import Peso from './Peso/Peso';
import Velocidad from './Velocidad/Velocidad';
import Distancia from './Distancia/Distancia';
import Volumen from './Volumen/Volumen';
 */
function Main () {
  return (
    <main className="main">
      <Routes>
        <Route element={<Home/>} path='/'/>
        {/* <Route element={<Units/>} path='/Units'/>
        <Route element={<Temperatura/>} path='/Temperatura/'/>
        <Route element={<Exchange/>} path='/Exchange'/>
        <Route element={<Peso/>} path='/Peso'/>
        <Route element={<Velocidad/>} path='/Velocidad'/>
        <Route element={<Distancia/>} path='/Distancia'/>
        <Route element={<Volumen/>} path='/Volumen'/> */}
      </Routes>
    </main>
  )

}

export default Main;
