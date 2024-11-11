import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        {/* Profile and Title */}
        <div className="profile-header">
          <img src="../assets/images/main.jpg" alt="Profile Main" className="profile-main-img" />
          <h2 className="profile-name">Stephanie Olejarnik</h2>
          <p className="profile-role">Art Director</p>
        </div>

        {/* Text and Statistic Blocks */}
        <div className="about-text-image">
          <div className="text-block">
            <p>Since the internship, she goes the extra mile for TOWA. Since July 2013, she is responsible as an Art Director for Graphics & Design.</p>
            <p>Fight for each pixel and impressed by her boy’s obsession with detail and perfectionism.</p>
          </div>

          <div className="statistic-block">
            <p><strong>4</strong><br />Sports time the week is mandatory</p>
            <p><strong>97</strong><br />100 points for their bachelor thesis</p>
            <p><strong>5</strong><br />Teas she has in the office stock</p>
          </div>

          <div className="profile-block">
            <img src="path/to/profile-thumb.jpg" alt="Profile Thumbnail" className="profile-img" />
            <p className="profile-caption">Tanja and I co-authored and implemented the bachelor thesis.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="about-footer">
          <button className="discover-btn">Discover More</button>
          <span className="page-indicator">1 / 3</span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
