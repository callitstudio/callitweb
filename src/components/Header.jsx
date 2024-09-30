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

  // const handleNavigate = (path) => {
  //   navigate(path); 
  // }

  const handleNavigate = (path) => {
    if (path.startsWith('#')) {
      // Smooth scroll to the section if it starts with #
      const section = document.querySelector(path);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path); // Function to navigate to a given path
    }
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
          <li onClick={()=>{handleNavigate('/')}}>Home</li>
          <li onClick={()=>{handleNavigate('#Projects')}}>Projects</li>
          <li onClick={() => handleNavigate('/contact_us')}>ContactUs</li>
          <li onClick={()=>{handleNavigate('#Services')}}>Services</li>
          <li onClick={() => handleNavigate('/courses')} >Courses</li>
          <li>Jobs</li>
        </ul>
      </nav>
    </header>
  );
};
