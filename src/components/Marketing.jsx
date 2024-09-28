import React from 'react';
import './Marketing.css';
import Shoot from "../assets/Media/shoot.jpeg"


export const Marketing = () => {
  return (
    <div className="market-section">

      
      <div className="market-cards">

        
     <div className="market-card left mar-card pop-up left ">
      <Card title="MARKETING" />
     </div>

        <div className='market-card mar-card pop-up left'>
          <Card img={Shoot} title="DIGITAL MARETING" des="Our digital marketing services help businesses increase visibility, drive targeted 
            traffic, and boost conversions. We implement multi-channel strategies to reach 
            your audience through paid and organic methods."/>
        </div>
        
<div className=" market-card  mar-card right ">
          <Card img={Shoot} title="PRODUCT DESIGN" des="We create user-friendly, visually appealing product designs that align with your 
brand’s identity. From concept to execution, we ensure your product designs stand 
out in the competitive market" />
</div>


<div className='market-card mar-card  left'>
  <Card img={Shoot} title="SOCIAL MEDIA MARKETING" des="We manage and optimize your social media presence, creating targeted content and 
campaigns that foster engagement, increase followers, and convert them into loyal 
customers."/>
</div>

        

<div className='market-card  mar-card left'>
  <Card img={Shoot} title="BRANDING" des="We build and revitalize brands, ensuring they communicate clearly, stand out, and 
connect emotionally with their target audience. Our branding services help define 
your brand’s voice, visuals, and strategy for long-term success."/>
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


const Card=(props)=>{
  return(

    <>
  <div>
    <img src={props.img} alt="" />
    <h1>{props.title}</h1>
    <p>{props.des}</p>
  </div>
  </>
  )
}
