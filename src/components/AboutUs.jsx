import React from 'react';
import './AboutUs.css';
import mainImage from '../assets/images/main.jpg';

const AboutUs = () => {
  return (
    <section className="about-section">
      {/* Motion background layer */}
      <div className="motion-background"></div>

      <div className="about-content">
        {/* Left Image Section with shadow and border */}
        <div className="image-container">
          <img src={mainImage} alt="Profile Main" className="profile-main-img" />
        </div>

        {/* Right Text Section */}
        <div className="text-container">
          <h2 className="profile-name">Call It Studio</h2>
          <p className="profile-role">Your Desired Workplace</p>
          
          {/* WHO WE ARE Blurb */}
          <div className="blurb">
            <h3>WHO WE ARE</h3>
            <p>
              We are a passionate team of creative and tech-savvy individuals who love working with
              digital solutions. With experts in media, IT, and marketing, each of us brings unique skills
              to the table. Together, we aim to inculcate creativity in technology to produce amazing results.
            </p>
          </div>
          
          {/* WHAT WE DO Blurb */}
          <div className="blurb">
            <h3>WHAT WE DO</h3>
            <p>
              We offer a wide range of digital services designed to improve your brand. Our offerings are
              divided into three primary areas: marketing strategies, which include corporate identity,
              digital marketing, and content authoring; IT solutions, which include web and app development,
              SEO, and e-commerce; and media creation, which includes social media management, films,
              and animations. As a result, you receive unique designs that effectively blend imagination
              and technology to help your business compete online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
