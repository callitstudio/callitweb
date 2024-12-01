import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainSection.css';
import rightImage from '../assets/images/mainbg1.jpg'; // Replace with your image path

export const MainSection = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/aboutus');
  };

  return (
    <div className="container-fluid">
      <div className="intro">
        <section className="row left">
          <div className="col-md-6 col-sm-12">
            <h1>CALL IT STUDIO</h1>
            <p>Where Creativity Meets Technology to Craft Digital Excellence</p>
          </div>
          <button className="cta-btn" onClick={handleLearnMoreClick}>
            Learn More
          </button>
        </section>

      {/* Right Section */}
      <div className="right-section">
        <div className="image-frame">
          <img src={rightImage} alt="Studio Visual" className="framed-image" />
        </div>
      </div>
    </div>
  );
};
