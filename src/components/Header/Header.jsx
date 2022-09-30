import React from "react";
import Nav from './Nav/Nav';

import logo from '../../logo.svg';

function Header () {
  return (
    <div className="header">
      <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
      <Nav/>
    </div>
  ) 
     
  
}

export default Header;
