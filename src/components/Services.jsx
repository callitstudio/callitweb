


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
export const Services = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleNavigate = (path) => {
    navigate(path); // Function to navigate to a given path
  }

  
  return (
  <>
    <section id='Services'>
    <span className="line"/>
      <h2 className='heading'>SERVICES</h2>
      <section className="services">
        <div className="service-item " onClick={() => handleNavigate('/media')}>
          <div className="number-circle">1</div> {/* Numbered circle */}
          <h3>Media</h3>
          <p>We deliver creative media solutions that elevate your brand and captivate audience. Our approach focuses on producing impactful content drives engagement growth.</p>
        </div>

        <div className="service-item " onClick={() => handleNavigate('/ContentWriting')}>
          <div className="number-circle">2</div> {/* Numbered circle */}
          <h3>Content Writing</h3>
          <p>We craft narratives that inspire action through blogs, articles, or web content, helping your brand build trust, authority and public engagement in your industry.</p>
        </div>

        <div className="service-item line-item" onClick={() => handleNavigate('/marketing')}>
          <div className="number-circle tri">3</div> {/* Numbered circle */}
          <h3>Marketing</h3>
          <p>We craft innovative marketing strategies according to algorithms to elevate your brand and drive measurable results. Our team combines creativity with data-driven insights to develop campaigns that resonate with your target audience to enhance your market presence.</p>
        </div>

        <div className="service-item line-item" onClick={() => handleNavigate('/it')}>
          <div className="number-circle">4</div> {/* Numbered circle */}
          <h3>IT</h3>
          <p>We develop user-friendly websites and mobile applications tailored to meet your specific needs. We aim to create innovative IT solutions that streamline your buisness operations and boost your online presence.</p>
        </div>
      </section>
    </section>
  </>
  );
}



// return (
//   <>
//   <section id='Services'></section>
//   <div className="wrapper">
//     <div className="center-line">
//       <a href="#" className="scroll-icon">
//         <FontAwesomeIcon icon={faCaretUp} />
//       </a>
//     </div>

//     <div className="row row-1">
//       <section>
//         <FontAwesomeIcon icon={faHome} className="icon" />
//         <div className="details">
//           {/* <span className="title">Title of Section 1</span> */}
//           {/* <span>1st Jan 2021</span> */}
//           <div className="service-item " onClick={() => handleNavigate('/media')}>
//        <div className="number-circle">1</div> {/* Numbered circle */}
//        <h3>Media</h3>
//        <p>We deliver creative media solutions that elevate your brand and captivate audience. Our approach focuses on producing impactful content drives engagement growth.</p>
//      </div>

//         </div>
//         <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
//         <div className="bottom">
//           <a href="#">Read more</a>
//           <i>- Someone famous</i>
//         </div>
//       </section>
//     </div>

//     <div className="row row-2">
//       <section>
//         <FontAwesomeIcon icon={faStar} className="icon" />
//         <div className="details">
//           <span className="title">Title of Section 2</span>
//           <span>2nd Jan 2021</span>
//         </div>
//         <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
//         <div className="bottom">
//           <a href="#">Read more</a>
//           <i>- Someone famous</i>
//         </div>
//       </section>
//     </div>


//     <div className="service-item " onClick={() => handleNavigate('/media')}>
//      <FontAwesomeIcon icon={faRocket} className="icon" />
//        <div className="number-circle">1</div> {/* Numbered circle */}
//        <h3>Media</h3>
//        <p>We deliver creative media solutions that elevate your brand and captivate audience. Our approach focuses on producing impactful content drives engagement growth.</p>
//      </div>

//     {/* <div className="row row-1">
//       <section>
//         <div className="details">
//           <span className="title">Title of Section 3</span>
//           <span>3rd Jan 2021</span>
//         </div>
//         <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
//         <div className="bottom">
//           <a href="#">Read more</a>
//           <i>- Someone famous</i>
//         </div>
//       </section>
//     </div> */}

//     <div className="row row-2">
//       <section>
//         <FontAwesomeIcon icon={faGlobe} className="icon" />
//         <div className="details">
//           <span className="title">Title of Section 4</span>
//           <span>4th Jan 2021</span>
//         </div>
//         <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
//         <div className="bottom">
//           <a href="#">Read more</a>
//           <i>- Someone famous</i>
//         </div>
//       </section>
//     </div>

//     <div className="row row-1">
//       <section>
//         <FontAwesomeIcon icon={faPaperPlane} className="icon" />
//         <div className="details">
//           <span className="title">Title of Section 5</span>
//           <span>5th Jan 2021</span>
//         </div>
//         <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
//         <div className="bottom">
//           <a href="#">Read more</a>
//           <i>- Someone famous</i>
//         </div>
//       </section>
//     </div>

//     <div className="row row-2">
//       <section>
//         <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//         <div className="details">
//           <span className="title">Title of Section 6</span>
//           <span>6th Jan 2021</span>
//         </div>
//         <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
//         <div className="bottom">
//           <a href="#">Read more</a>
//           <i>- Someone famous</i>
//         </div>
//       </section>
//     </div>
//   </div>
//   </>
// );
