
import React from 'react';
import './MainSection.css';
import gif from '../assets/images/super.gif'; 
export const MainSection = () => {
  return (
    <div className="container-fluid">
      <div className="intro">
        <section className="row align-items-center">
          <div className="col-md-6 col-sm-12 text-section">
            <h1>CALL IT STUDIO</h1>
            <p>We’re a passionate team of creative and tech-savvy individuals who love working with digital solutions. With experts in media, IT, and marketing, each of us brings unique skills to the table. Together, we aim to combine creativity and technology to produce amazing results.</p>
            <button className="cta-btn">Learn More</button>
          </div>
          <div className="col-md-6 col-sm-12 gif-section">
            <img   src={gif} alt="Creative Work GIF" className="responsive-gif" />
          </div>
        </section>
      </div>
    </div>
  );
};
