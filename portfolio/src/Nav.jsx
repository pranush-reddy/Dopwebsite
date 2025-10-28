import React, { useState } from 'react';
import sign from "./assets/sign.png"; 
import './Nav.css';

function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
        <img src={sign}/>
        </div>

        {/* Hamburger (always visible) */}
        {/* <div className="hamburger" onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div> */}
      </nav>

      {/* Sidebar */}
      {/* <div className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/" onClick={toggleSidebar}>Works</a></li>
          <li><a href="/" onClick={toggleSidebar}>Skills</a></li>
          <li><a href="/" onClick={toggleSidebar}>Contact</a></li>
          <li><a href="/" onClick={toggleSidebar}>Services</a></li>
        </ul>
      </div> */}

      {/* Overlay */}
      {/* {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>} */}
    </>
  );
}

export default Nav;
