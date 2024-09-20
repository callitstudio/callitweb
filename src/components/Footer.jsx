import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo-footer">CALL IT STUDIO</div>
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="contact">
          <p>Subscribe to our newsletter</p>
          <input type="email" placeholder="Enter email address" />
          <p>Ph: 03xx-xxxxxxx</p>
          <p>Email: xyz@gmail.com</p>
          <div className="social-icons">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-github"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};


