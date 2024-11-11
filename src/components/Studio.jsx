

import React from 'react';
import Shoot from "../assets/Media/shoot.jpeg";
import Card from "./Card";

import "./Studio.css"
const Studio = () => {
  return (
    <div className="studio-section">
      <div className="studio-cards">
        {/* <div className="studiocard center">
          <img src={Shoot} alt="" className='img' />
          <h3>Studio</h3>
          <p>
            We manage your social media presence to build brand awareness
            and manage with your audience effectively. Our strategies are
            tailored to enhance your online visibility, ensuring consistent
            and impactful communication across all platforms.
          </p>
        </div> */}
        
        <div className='studiocard pop-up '>
          <Card title="Studio" />
        </div>
        

        <div className="studiocard  left">
          <Card title="Socail Media Marketing" img={Shoot}
            des="We can manage your social handles for you."
          />
        </div>

        <div className="studiocard left">
          <Card title="Social Media Management" img={Shoot}
            des="We can handle your social media pages."
          />
        </div>

        <div className="studiocard left">
          <Card title="Product Shoot" img={Shoot}
            des="We can make Product Shoot. that includes:
                Shoot
                Models
                Studio
                Podcast
                
            "
          />
        </div>

        <div className="studiocard left">
          <Card title="ANIMATIONS" img={Shoot}
            des="Our 2D and 3D Animation services add a dynamic touch to your
            brand's storytelling. We create animations that captivate and
            communicate complex ideas in an accessible and visually
            appealing way."
          />
        </div>

        <div className="studiocard left">
          <Card title="Product Hunting" img={Shoot}
            des="Hunt a product for your stores."
          />
        </div>
        
        <div className="studiocard left">
          <Card title="Contetn Writing " img={Shoot}
            des="Get Content Wrtiting Services ."
          />
        </div>
      </div>
    </div>
  );
};

export default Studio;
