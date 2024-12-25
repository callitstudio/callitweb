import React from 'react';
import './style.css';
import img1 from '../assets/images/camera.jpg'; // Replace with your image path

const Banner = () => {
  return (
    <div className="banner">
      <div className="slider" style={{ '--quantity': 10 }}>
        <div className="item" style={{ '--position': 1 }}>
          <img src={img1} alt="" />
        </div>
        <div className="item" style={{ '--position': 2 }}>
        <img src={img1} alt="" />
        </div>
        <div className="item" style={{ '--position': 3 }}>
        <img src={img1} alt="" />
        </div>
        <div className="item" style={{ '--position': 4 }}>
        <img src={img1} alt="" />
        </div>
        <div className="item" style={{ '--position': 5 }}>
        <img src={img1} alt="" />
        </div>
        <div className="item" style={{ '--position': 6 }}>
        <img src={img1} alt="" />
        </div>
        <div className="item" style={{ '--position': 7 }}>
        <img src={img1} alt="" />
        </div>
        <div className="item" style={{ '--position': 8 }}>
        <img src={img1} alt="" />
        </div>
        <div className="item" style={{ '--position': 9 }}>
        <img src={img1} alt="" />
        </div>
        <div className="item" style={{ '--position': 10 }}>
        <img src={img1} alt="" />
        </div>
      </div>
     
        <div className="model"></div>
      </div>
    
  );
};

export default Banner;
