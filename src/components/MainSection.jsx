import React from 'react';
import './MainSection.css';

export const MainSection = () => {
  return (
    <div className="container-fluid">
      <div className="intro">
        <section className="row">
          <div className="col-md-6 col-sm-12">
            <h1>CALL IT STUDIO</h1>
            <p>We’re a passionate team of creative and tech-savvy individuals who love working with digital solutions. With experts in media, IT, and marketing, each of us brings unique skills to the table. Together, we aim to combine creativity and technology to produce amazing results.</p>
          </div>
            <button className="cta-btn">Learn More</button>
        </section>
        <section className="up"></section>
        <section className="down"></section>
      </div>
    </div>
  );
};
