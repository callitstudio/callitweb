
import React from 'react';
import './MainSection.css';
import mainImg from "../assets/Media/mainSectionImg.jpg"
import video from "../assets/Media/animiVideo.mp4"
export const MainSection = () => {
  return (
    <div className="container-fluid">
      <div className="intro">
        <section className="row left">
          <div className="col-md-6 col-sm-12">
            <h1>CALL IT STUDIO</h1>
            <p>We’re a passionate team of creative and tech-savvy individuals who love working with digital solutions. With experts in media, IT, and marketing, each of us brings unique skills to the table. Together, we aim to combine creativity and technology to produce amazing results.</p>
            <button className="cta-btn">Learn More</button>
          </div>
          <div className="col-md-6 col-sm-12 gif-section">
            <img   src={gif} alt="Creative Work GIF" className="responsive-gif" />
          </div>
        </section>

        <section className='right '>
            {/* <img src={mainImg} alt="" /> */}
            <video src={video} autoPlay muted loop width="100%" height="auto"></video>
        </section>
        <section className="up"></section>
        <section className="down"></section>
      </div>
    </div>
  );
};
