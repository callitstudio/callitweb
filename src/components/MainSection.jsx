import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainSection.css';
// import video from "../assets/Media/animiVideo.mp4";

export const MainSection = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/aboutus'); // Redirect to /aboutus route
  };

  return (
    <div className="container-fluid">
      <div className="intro">
        <section className="row left">
          <div className="col-md-6 col-sm-12">
            <h1>CALL IT STUDIO</h1>
            <p className='slogen'>Where Creativity Meets Technology to Craft Digital Excellence</p>
          </div>
          <button className="cta-btn" onClick={handleLearnMoreClick}>
            Learn More
          </button>
        </section>

        {/* <section className="right">
          <video src={video} autoPlay muted loop width="100%" height="auto"></video>
        </section> */}

        <section className="up"></section>
        <section className="down"></section>
      </div>
    </div>
  );
};
