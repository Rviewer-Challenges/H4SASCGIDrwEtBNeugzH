import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import Units from "./Home/Units/Units";

function Main () {
  return (
    <main className="main">
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Units/>} path='/Units'/>
        
      </Routes>
    </main>
  )
}

export default Main;
