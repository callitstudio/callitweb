// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
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
//     // Set loaded to true after 1/2 second to trigger transitions
//     setTimeout(() => {
//       setLoaded(true);
//     }, 500);
//   }, []);

//   const services = [
//     {
//       number: 1,
//       title: 'Media',
//       description: 'We deliver creative media solutions that elevate your brand and captivate audience...',
//       image: mediagif,
//       path: '/media',
//       alt: 'Media Service',
//     },
//     {
//       number: 2,
//       title: 'Content Writing',
//       description: 'We craft narratives that inspire action...',
//       image: contentgif,
//       path: '/ContentWriting',
//       alt: 'Content Writing Service',
//     },
//     {
//       number: 3,
//       title: 'Marketing',
//       description: 'We craft innovative marketing strategies...',
//       image: marketinggif,
//       path: '/marketing',
//       alt: 'Marketing Service',
//     },
//     {
//       number: 4,
//       title: 'IT',
//       description: 'We develop user-friendly websites...',
//       image: itgif,
//       path: '/it',
//       alt: 'IT Service',
//     },
//     {
//       number: 5,
//       title: 'Studio',
//       description: 'We can manage your social handle efficiently...',
//       image: studiogif,
//       path: '/studio',
//       alt: 'Studio Service',
//     },
//     {
//       number: 6,
//       title: 'Event Management',
//       description: 'Get your important events managed by us...',
//       image: eventgif,
//       path: '/events',
//       alt: 'Event Management Service',
//     },
//   ];

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   return (
//     <section id="Services">
//       <h2 className="heading">SERVICES</h2>
//       <section className="services">
//         {services.map((service) => (
//           <div
//             key={service.number}
//             className={`service-item ${loaded ? 'loaded' : ''}`}
//             data-number={service.number}
//             onClick={() => handleNavigate(service.path)}
//           >
//             <div className="number-circle">{service.number}</div>
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//             <img src={service.image} alt={service.alt} className="service-image" />
//           </div>
//         ))}
//       </section>
//     </section>
//   );
// };

// export default Services;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Services.css';
import mediagif from '../assets/images/media.gif';
import contentgif from '../assets/images/content.gif';
import itgif from '../assets/images/it.gif';
import studiogif from '../assets/images/studio.gif';
import eventgif from '../assets/images/event.gif';
import marketinggif from '../assets/images/marketing.gif';

export const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      number: 1,
      title: 'Media',
      description: 'We deliver creative media solutions that elevate your brand and captivate audience...',
      image: mediagif,
      path: '/media',
      alt: 'Media Service',
    },
    {
      number: 2,
      title: 'Content Writing',
      description: 'We craft narratives that inspire action...',
      image: contentgif,
      path: '/ContentWriting',
      alt: 'Content Writing Service',
    },
    {
      number: 3,
      title: 'Marketing',
      description: 'We craft innovative marketing strategies...',
      image: marketinggif,
      path: '/marketing',
      alt: 'Marketing Service',
    },
    {
      number: 4,
      title: 'IT',
      description: 'We develop user-friendly websites...',
      image: itgif,
      path: '/it',
      alt: 'IT Service',
    },
    {
      number: 5,
      title: 'Studio',
      description: 'We can manage your social handle efficiently...',
      image: studiogif,
      path: '/studio',
      alt: 'Studio Service',
    },
    {
      number: 6,
      title: 'Event Management',
      description: 'Get your important events managed by us...',
      image: eventgif,
      path: '/events',
      alt: 'Event Management Service',
    },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <section id="Services">
      {/* <h2 className="heading">SERVICES</h2> */}
      <section className="services">
        {services.map((service) => (
          <motion.div
            key={service.number}
            className="service-item"
            data-number={service.number}
            onClick={() => handleNavigate(service.path)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: service.number * 0.1 }}
          >
            <div className="number-circle">{service.number}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <img src={service.image} alt={service.alt} className="service-image" />
          </motion.div>
        ))}
      </section>
    </section>
  );
};

export default Services;
