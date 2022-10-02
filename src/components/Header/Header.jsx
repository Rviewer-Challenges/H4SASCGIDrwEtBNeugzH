import React from "react";
import Nav from './Nav/Nav';

import logo from '../../logo.svg';

function Header () {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
            <p>
              Under construction
            </p>
            <a
              className="App-link"
              href="https://github.com/Gaizka79/converter.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git Hub Project
            </a>
      <Nav/>
    </header>
  ) 
     
  
}

export default Header;
