import React from 'react';
import './Media.css';

const Media = () => {
  return (
    <div className="marketing-section">
      <h1 className="section-title">MEDIA</h1>
      
      <div className="marketing-cards">
        <div className="card full-width">
          <h3>SOCIAL MEDIA MANAGMENT </h3>
          <p>We manage your social media presence to build brand awarness
            and manage with your audience effectively. Our strategies are tailored 
            to enhance your online visibility, ensuring consistent and impactful
             communication across all platform.
</p>
        </div>

        <div className="card half-width">
          <h3>PRODUCT SHOOT</h3>
          <p>Our professional product shoot capture the essence of your products with precesion and creativity. We focus 
            on showcasing your products in the best light, creating visuals that attracts and convert potential customers. </p>
        </div>

        <div className="card half-width">
          <h3>DVC/TVC/DOCUMENTARY</h3>
          <p>We produce compelling digital and television commercials, as well as insightful
            documentaries, that tell your brand's story. Our team ensures high-quality visuals and narratives that 
            resonate with your target audience.
</p>
        </div>

        <div className="card full-width">
          <h3>PHOTO / VIDEO EDITING</h3>
          <p>We produce compelling digital and television commercials, as well as insightful documentaries, 
            that tell your brand's story. Our team ensures high quality visuals and narratives that resonate 
            with your target audience.
          </p>
        </div>
        <div className="card full-width">
          <h3>2D/3D ANIMATIONS</h3>
          <p>Our 2D and 3D Animation services add a dynamic t your brand's storytelling.
            We createanimations that captivates and communicate complex ideas in an accessible and visually appealing way.

          </p>
        </div>
        <div className="card full-width">
          <h3>VISUAL ARTS / GRAPHIC DESIGN</h3>
          <p>Our graphic design services bring your brand to life with
            visually stunning and creative designs. From logos to marketing 
            materials, we ensure your brand's identity is both  memorable and impactful.
            
          </p>
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

export default Media;
