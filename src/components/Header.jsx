import React from 'react';
import './Header.css';
import logo from '../assets/logo.png'; // Adjust the path to your assets folder
export const Header = () => {
  return (
    <header className="header">
  <div className="logo">
        <img src={logo} alt="CALL IT STUDIO Logo" className="logo-img" />
       
      </div>
            <nav className="nav">
        <ul>
          <li>Projects</li>
          <li>Contact Us</li>
          <li>Services</li>
          <li>Jobs</li>
        </ul>
      </nav>
    </header>
  );
};


