
import {React} from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import { Link,useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate(); 
  
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
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-section logo-footer">
          <img src={logo} alt="CALL IT STUDIO Logo" className="logo-img" />
          <h2>CALL IT STUDIO</h2>
        </div>

        <div className="footer-section quick-links">
          <h4>Links</h4>
          <li onClick={() => handleNavigate('/contact_us')}>ContactUs</li>
          <li onClick={()=>{handleNavigate('#Services')}}>Services</li>
          <li onClick={() => handleNavigate('/courses')} >Courses</li>
          <li>Jobs</li>
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
            <a href="https://www.linkedin.com/company/call-it-studio/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/callitstudio?igsh=MTFyZjc4YTF3bWJwMQ==" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 CALL IT STUDIO. All rights reserved.</p>
      </div>
    </footer>
  );
};
