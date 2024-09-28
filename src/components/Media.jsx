import React from 'react';
import './Media.css';
import Shoot from "../assets/Media/shoot.jpeg"

const Media = () => {
  return (
    <div className="marketing-section">
      

      <div className="marketing-cards">

        
      {/* <div className='card left pop-up left'>
      <h1 className="section-title">MEDIA</h1>
      </div>
       */}
        <div className="card center">
          <img src={Shoot} alt="" className='img' />
          <h3>SOCIAL MEDIA MANAGEMENT</h3>
          <p>
            We manage your social media presence to build brand awareness
            and manage with your audience effectively. Our strategies are
            tailored to enhance your online visibility, ensuring consistent
            and impactful communication across all platforms.
          </p>
        </div>

        <div className='card left pop-up left'>
      <h1 className="section-title">MEDIA</h1>
      </div>
      


         <div className="card pop-up left">
         <img src={Shoot} alt="" className='img' />
          <h3>PRODUCT SHOOT</h3>
          <p>
            Our professional product shoots capture the essence of your
            products with precision and creativity. We focus on showcasing
            your products in the best light, creating visuals that attract
            and convert potential customers.
          </p>
        </div>

        <div className="card right">
        <img src={Shoot} alt="" className='img' />
          <h3>DVC/TVC/DOCUMENTARY</h3>
          <p>
            We produce compelling digital and television commercials, as
            well as insightful documentaries, that tell your brand's story.
            Our team ensures high-quality visuals and narratives that resonate
            with your target audience.
          </p>
        </div>
      
        <div className="card left">
        <img src={Shoot} alt="" className='img' />
          <h3>PHOTO / VIDEO EDITING</h3>
          <p>
            We ensure high-quality visuals and narratives that resonate with
            your target audience.
          </p>
        </div>

        <div className="card right">
        <img src={Shoot} alt="" className='img' />
          <h3>2D/3D ANIMATIONS</h3>
          <p>
            Our 2D and 3D Animation services add a dynamic touch to your
            brand's storytelling. We create animations that captivate and
            communicate complex ideas in an accessible and visually
            appealing way.
          </p>
        </div>


        <div className="card left">
        <img src={Shoot} alt="" className='img' />
          <h3>VISUAL ARTS / GRAPHIC DESIGN</h3>
          <p>
            Our graphic design services bring your brand to life with
            visually stunning and creative designs. From logos to marketing
            materials, we ensure your brand's identity is both memorable and
            impactful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Media;
