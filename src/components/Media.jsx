import React from 'react';
import './Media.css';
import Shoot from "../assets/Media/shoot.jpeg"
import Card from "./Card"

const Media = () => {
  return (
    <div className="marketing-section">


      <div className="marketing-cards">


        {/* <div className="card center">
          <img src={Shoot} alt="" className='img' />
          <h3>SOCIAL MEDIA MANAGEMENT</h3>
          <p>
            We manage your social media presence to build brand awareness
            and manage with your audience effectively. Our strategies are
            tailored to enhance your online visibility, ensuring consistent
            and impactful communication across all platforms.
          </p>
        </div> */}

        <div className='card  pop-up right left'>

          <Card title="MEDIA" />
        </div>



        <div className="card pop-up right left">
          <Card title="PRODUCT SHOOT" img={Shoot}
            des="Our professional product shoots capture the essence of your
            products with precision and creativity. We focus on showcasing
            your products in the best light, creating visuals that attract
            and convert potential customers."
          />


        </div>



        <div className="card right left">
          <Card title="DVC/TVC/ DOCUMENTARY" img={Shoot}
            des="We produce compelling digital and television commercials, as
            well as insightful documentaries, that tell your brand's story.
            Our team ensures high-quality visuals and narratives that resonate
            with your target audience."
          />

        </div>

        <div className="card left">
          <Card title="VIDEO EDTIING" img={Shoot}
            des="We ensure high-quality visuals and narratives that resonate with
            your target audience."
          />

        </div>

        <div className="card right left">
          <Card title="2D/3D ANIMATIONS" img={Shoot}
            des="Our 2D and 3D Animation services add a dynamic touch to your
            brand's storytelling. We create animations that captivate and
            communicate complex ideas in an accessible and visually
            appealing way.
"
          />

        </div>


        <div className="card left">
          <Card title="VISUAL ARTS / GRAPHIC DESIGN" img={Shoot}
            des="Our graphic design services bring your brand to life with
            visually stunning and creative designs. From logos to marketing
            materials, we ensure your brand's identity is both memorable and
            impactful."
          />

        </div>
      </div>
    </div>
  );
};

export default Media;
