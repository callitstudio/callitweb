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
    <section id='Services'>
      <h2 className='heading'>SERVICES</h2>
      <section className="services">
        <div className="service-item" data-number="1" onClick={() => handleNavigate('/media')}>
          <h3>Media</h3>
          <p>We deliver creative media solutions that elevate your brand and captivate audience. Our approach focuses on producing impactful content drives engagement growth.</p>
        </div>

        <div className="service-item" data-number="2" onClick={() => handleNavigate('/ContentWriting')}>
          <h3>Content Writing</h3>
          <p>We craft narratives that inspire action through blogs, articles, or web content, helping your brand build trust, authority and public engagement in your industry.</p>
        </div>

        <div className="service-item" data-number="3" onClick={() => handleNavigate('/marketing')}>
          <h3>Marketing</h3>
          <p>We craft innovative marketing strategies according to algorithms to elevate your brand and drive measurable results. Our team combines creativity with data-driven insights to develop campaigns that resonate with your target audience to enhance your market presence. </p>
        </div>

        <div className="service-item" data-number="4" onClick={() => handleNavigate('/it')}>
          <h3>IT</h3>
          <p>We develop user-friendly websites and mobile applications tailored to meet your specific needs. We aim to create innovative IT solutions that streamline your buisness operations and boost your online presence.</p>
        </div>

        <div className="service-item" data-number="5" onClick={() => handleNavigate('/studio')}>
          <h3>Studio</h3>
          <p>We can manage your social handle effeciently for you.</p>
        </div>

        <div className="service-item" data-number="6" onClick={() => handleNavigate('/events')}>
          <h3>Event Management </h3>
          <p>Get you important events manage by us .</p>
        </div>
      </section>
    </section>
  </section>
  </>
);
}