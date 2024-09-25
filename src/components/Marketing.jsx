import React from 'react';
import './Marketing.css';

export const Marketing = () => {
  return (
    <div className="marketing-section">
      <h1 className="section-title">MARKETING</h1>
      
      <div className="marketing-cards">
        <div className="card full-width">
          <h3>DIGITAL MARKETING</h3>
          <p>Our digital marketing services help businesses increase visibility, drive targeted 
traffic, and boost conversions. We implement multi-channel strategies to reach 
your audience through paid and organic methods.
</p>
        </div>

        <div className="card half-width">
          <h3>PRODUCT DESIGN</h3>
          <p>We create user-friendly, visually appealing product designs that align with your 
brand’s identity. From concept to execution, we ensure your product designs stand 
out in the competitive market</p>
        </div>

        <div className="card half-width">
          <h3>SOCIAL MEDIA MARKETING</h3>
          <p>We manage and optimize your social media presence, creating targeted content and 
campaigns that foster engagement, increase followers, and convert them into loyal 
customers.
</p>
        </div>

        <div className="card full-width">
          <h3>BRANDING</h3>
          <p>We build and revitalize brands, ensuring they communicate clearly, stand out, and 
connect emotionally with their target audience. Our branding services help define 
your brand’s voice, visuals, and strategy for long-term success.</p>
        </div>
      </div>

      <h2 className="job-openings-title">JOB OPENINGS</h2>
      <div className="job-opening-card">
        <div className="job-opening-info">
          {/* Add job opening information here */}
        </div>
        <div className="job-opening-icons">
          <i className="share-icon">🔗</i>
          <i className="heart-icon">❤️</i>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
