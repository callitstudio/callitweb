import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'; // Adjust the path to your assets folder

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setMenuActive(!menuActive); // Toggle menu active state
  };
  const navigate = useNavigate(); // Hook for navigation

  const handleNavigate = (path) => {
    navigate(path); // Function to navigate to a given path
  }


  return (
    <header className="header">
      <div className="logo" onClick={() => handleNavigate('/')}>
        <img src={logo} alt="CALL IT STUDIO Logo" className="logo-img" />
         CALL IT STUDIO
      </div>
      <nav className={`nav ${menuActive ? 'active' : ''}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul>
          <li>Projects</li>
          <li onClick={() => handleNavigate('/contact-us')}>Contact Us </li>
          <li>Services</li>
          <li>Jobs</li>
        </ul>
      </nav>
    </header>
  );
};
