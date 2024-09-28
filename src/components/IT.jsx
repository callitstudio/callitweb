// import React from 'react';
// import './Marketing.css';

// const IT = () => {
//   return (
//     <div className="marketing-section">
//       <h1 className="section-title">IT</h1>
      
//       <div className="marketing-cards">
//         <div className="card full-width">
//           <h3>SEARCH ENGINE OPTIMIZATION</h3>
//           <p>We optimize your online presence to rank higher in search
//             enigne results, driving organic traffic to your website. Our SEO strategies 
//             are designed to improve visiblity, boost engagment and increase conversions. 
// </p>
//         </div>

//         <div className="card half-width">
//           <h3>UI/UX</h3>
//           <p>Our UI/UX design service prioritize user experience, creating intutive 
//             and aesthetically pleasing interfaces. We focus on making your digital platform 
//             easy to navigate enhancing user staisfaction and engagment.
//           </p>
//         </div>
//         <div className="card half-width">
//           <h3>WEB DEVELOPMENT</h3>
//           <p>Our web development services create responsive, user friendly websites tailored
//             to your buisness needs. We focus on delivering high-performing websities that enhance your 
//             brand's digital experience and drive growth
//           </p>
//         </div>
//         <div className="card half2-width">
//           <h3>SHOPIFY STORES</h3>
//           <p>We build and optimize Shopify stores to help you succeed
//             in the e-commerce space. Our services inculde setup, customization, and managment to 
//             ensure your online store attracts and retains customers.
// </p>
//         </div>

//         <div className="card full-width">
//           <h3>APP DEVELOPMENT</h3>
//           <p>We develop custom mobile application that offer seamless user experience across
//             devices. Our apps are designed to meet your specific requirements, ensuring functionality,
//             performance, and scalablity.
//           </p>
//         </div>
//       </div>

//       <h2 className="job-openings-title">JOB OPENINGS</h2>
//       <div className="job-opening-card">
//         <div className="job-opening-info">
//           {/* Add job opening information here */}
//         </div>
//         <div className="job-opening-icons">
//           <i className="share-icon">🔗</i>
//           <i className="heart-icon">❤️</i>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IT;

import React from 'react';
import './IT.css';
import ITImage from "../assets/Media/shoot.jpeg"; // Example image, you can replace this

const IT = () => {
  return (
    <div className="it-section">
      
      {/* <h1 className="it-title">IT</h1> */}
      
      <div className="it-cards">
        <div className='it-card pop-up'>
          <Card title="IT"/>
        </div>
        <div className="it-card left">
          <Card img={ITImage} title="SEARCH ENGINE OPTIMIZATION" des="We optimize your online presence to rank higher in search engine results, driving organic traffic to your website. Our SEO strategies are designed to improve visibility, boost engagement, and increase conversions." />
        </div>


        <div className="it-card right">
          <Card img={ITImage} title="WEB DEVELOPMENT" des="Our web development services create responsive, user-friendly websites tailored to your business needs. We deliver high-performing websites that enhance your brand's digital experience and drive growth." />
        </div>

        <div className="it-card left">
          <Card img={ITImage} title="SHOPIFY STORES" des="We build and optimize Shopify stores to help you succeed in the e-commerce space. Our services include setup, customization, and management to ensure your online store attracts and retains customers." />
        </div>

        <div className="it-card left">
          <Card img={ITImage} title="APP DEVELOPMENT" des="We develop custom mobile applications that offer seamless user experiences across devices. Our apps are designed to meet your specific requirements, ensuring functionality, performance, and scalability." />
        </div>
      </div>

      <h2 className="job-openings-heading">JOB OPENINGS</h2>
      <div className="job-opening-container">
        <div className="job-opening-details">
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


export default IT;

const Card = (props) => {
  return (
    <div >
      <img src={props.img} alt=""  className="it-img"/>
      <h1>{props.title}</h1>
      <p>{props.des}</p>
    </div>
  );
};
