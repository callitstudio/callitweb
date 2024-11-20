import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import mediagif from '../assets/images/media.gif';
import contentgif from '../assets/images/content.gif';
import itgif from '../assets/images/it.gif';
import studiogif from '../assets/images/studio.gif';
import eventgif from '../assets/images/event.gif';
import marketinggif from '../assets/images/marketing.gif';
// import content from "../assets/images/content.gif"
// import media from "../assets/images/media.gif"
// import event from "../assets/images/event.gif"
// import it from "../assets/images/it.gif"
// import marketing from "../assets/images/marketing.gif"
// import studio from "../assets/images/studio.gif"
// import event from "../assets/images/event.gif"


export const Services = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after 1/2 second to trigger transitions
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <section id='Services'>
      <h2 className='heading'>SERVICES</h2>
      <section className="services">
        <div className={`service-item ${loaded ? 'loaded' : ''}`} data-number="1" onClick={() => handleNavigate('/media')}>
          <h3>Media</h3>
          <p>We deliver creative media solutions that elevate your brand and captivate audience...</p>
        {/* <div className="service-image" > */}
          <img src={mediagif} alt="Media" />
        {/* </div> */}
        </div >



        <div className={`service-item ${loaded ? 'loaded' : ''}`} data-number="2" onClick={() => handleNavigate('/ContentWriting')}>
          <h3>Content Writing</h3>
          <p>We craft narratives that inspire action...</p>
        {/* <div className='service-item'> */}
          <img src={contentgif} alt="Content Writing" />
        {/* </div> */}
        </div>


        <div className={`service-item ${loaded ? 'loaded' : ''}`} data-number="3" onClick={() => handleNavigate('/marketing')}>
          <h3>Marketing</h3>
          <p>We craft innovative marketing strategies...</p>
        {/* <div className="service-image"> */}
          <img src={marketinggif} alt="Marketing" className="service-image" />
        {/* </div> */}
        </div>


        <div className={`service-item ${loaded ? 'loaded' : ''}`} data-number="4" onClick={() => handleNavigate('/it')}>
          <h3>IT</h3>
          <p>We develop user-friendly websites...</p>
          {/* <div className="service-image"> */}
          <img src={itgif} alt="IT" className="service-image" />
          {/* </div> */}
        </div>
          

        <div className={`service-item ${loaded ? 'loaded' : ''}`} data-number="5" onClick={() => handleNavigate('/studio')}>
          <h3>Studio</h3>
          <p>We can manage your social handle efficiently...</p>
        {/* <div className="service-image"> */}
          <img src={studiogif} alt="Studio" className="service-image" />
        {/* </div> */}
        </div>


        <div className={`service-item ${loaded ? 'loaded' : ''}`} data-number="6" onClick={() => handleNavigate('/events')}>
          <h3>Event Management</h3>
          <p>Get your important events managed by us...</p>
      {/* <div className="service-image"> */}
        <img src={eventgif} alt="Event Management" className="service-image" />
        {/* </div>   */}
        </div>

      
      </section>
    </section>
  );
};


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import './Services.css';
// import mediagif from '../assets/images/media.gif';
// import contentgif from '../assets/images/content.gif';
// import itgif from '../assets/images/it.gif';
// import studiogif from '../assets/images/studio.gif';
// import eventgif from '../assets/images/event.gif';
// import marketinggif from '../assets/images/marketing.gif';

// export const Services = () => {
//   const navigate = useNavigate();
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoaded(true);
//     }, 500);
//   }, []);

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   // Animation variants for motion elements
//   const animationVariants = {
//     initial: { x: 0, y: 0, opacity: 0 },
//     animate: (custom) => ({
//       x: custom.x,
//       y: custom.y,
//       opacity: 1,
//       transition: { duration: 1, ease: 'easeInOut' },
//     }),
//   };

//   // Service items data with images, paths, positions
//   const services = [
//     { id: 1, title: 'Media', description: 'We deliver creative media solutions that elevate your brand and captivate audience...', img: mediagif, path: '/media', x: -100, y: -50 },
//     { id: 2, title: 'Content Writing', description: 'We craft narratives that inspire action...', img: contentgif, path: '/ContentWriting', x: 100, y: -50 },
//     { id: 3, title: 'Marketing', description: 'We craft innovative marketing strategies...', img: marketinggif, path: '/marketing', x: -100, y: 50 },
//     { id: 4, title: 'IT', description: 'We develop user-friendly websites...', img: itgif, path: '/it', x: 100, y: 50 },
//     { id: 5, title: 'Studio', description: 'We can manage your social handle efficiently...', img: studiogif, path: '/studio', x: -150, y: 100 },
//     { id: 6, title: 'Event Management', description: 'Get your important events managed by us...', img: eventgif, path: '/events', x: 150, y: 100 },
//   ];

//   return (
//     <section id='Services'>
//       <h2 className='heading'>SERVICES</h2>
//       <section className="services">
//         {services.map((service) => (
//           <motion.div
//             key={service.id}
//             className={`service-item ${loaded ? 'loaded' : ''}`}
//             data-number={service.id}
//             onClick={() => handleNavigate(service.path)}
//             initial="initial"
//             animate={loaded ? 'animate' : ''}
//             custom={{ x: service.x, y: service.y }}
//             variants={animationVariants}
//           >
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//             <img src={service.img} alt={service.title} />
//           </motion.div>
//         ))}
//       </section>
//     </section>
//   );
// };

// export default Services;
