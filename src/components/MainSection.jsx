import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainSection.css';
import rightImage from '../assets/images/mainbg1.jpg'; // Replace with your image path
import Banner from './Banner';
export const MainSection = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/aboutus');
  };

  return (
    
    <div className="main-section-container">
      <Banner />
       {/* Animated Circles
  <div className="circle left"></div>
  <div className="circle right"></div>
  <div className="circle left  bottom"></div>
  <div className="circle right  bottom"></div> */}

      {/* Left Section */}
      <div className="left-section">
        <h1 className="large-bold-text">CALL IT STUDIO</h1>
        <p className="description-text">
          Where Creativity Meets Technology to Craft Digital Excellence
        </p>
        <button className="cta-btn" onClick={handleLearnMoreClick}>
          Learn More
        </button>
      </div>

     
    </div>
  );
};
