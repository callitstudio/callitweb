


import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; 

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-section logo-footer">
          <img src={logo} alt="CALL IT STUDIO Logo" className="logo-img" />
          <h2>CALL IT STUDIO</h2>
        </div>

        <div className='footer-section quick-links'>
          <h4>Links</h4>
          <ul>
            <li>Contact Us</li>
            <li>Jobs</li>
            <li>Services</li>
          </ul>
        </div>

        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <p>Subscribe to our newsletter</p>
          <input type="email" placeholder="Enter email address" className="email-input" />
          <div className="contact-details">
            <p>Ph: 03xx-xxxxxxx</p>
            <p>Email: xyz@gmail.com</p>
          </div>
          <div className="social-icons">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-github"></i>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 CALL IT STUDIO. All rights reserved.</p>
      </div>
    </footer>
  );
};

