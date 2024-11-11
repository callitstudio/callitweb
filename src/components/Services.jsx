import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import mediagif from '../assets/images/media.gif';
import contentgif from '../assets/images/content.gif';
import itgif from '../assets/images/it.gif';
import studiogif from '../assets/images/studio.gif';
import eventgif from '../assets/images/event.gif';
import marketinggif from '../assets/images/marketing.gif';


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
          <img src={mediagif} alt="Media" className="service-image" />
        </div>

        <div className={`service-item ${loaded ? 'loaded' : ''}`} data-number="2" onClick={() => handleNavigate('/ContentWriting')}>
          <h3>Content Writing</h3>
          <p>We craft narratives that inspire action...</p>
          <img src={contentgif} alt="Content Writing" className="service-image" />
        </div>

        <div className={`service-item ${loaded ? 'loaded' : ''}`} data-number="3" onClick={() => handleNavigate('/marketing')}>
          <h3>Marketing</h3>
          <p>We craft innovative marketing strategies...</p>
          <img src={marketinggif} alt="Marketing" className="service-image" />
        </div>

        <div className={`service-item ${loaded ? 'loaded' : ''}`} data-number="4" onClick={() => handleNavigate('/it')}>
          <h3>IT</h3>
          <p>We develop user-friendly websites...</p>
          <img src={itgif} alt="IT" className="service-image" />
        </div>

        <div className={`service-item ${loaded ? 'loaded' : ''}`} data-number="5" onClick={() => handleNavigate('/studio')}>
          <h3>Studio</h3>
          <p>We can manage your social handle efficiently...</p>
          <img src={studiogif} alt="Studio" className="service-image" />
        </div>

        <div className={`service-item ${loaded ? 'loaded' : ''}`} data-number="6" onClick={() => handleNavigate('/events')}>
          <h3>Event Management</h3>
          <p>Get your important events managed by us...</p>
          <img src={eventgif} alt="Event Management" className="service-image" />
        </div>
      </section>
    </section>
  );
};
