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
          <p>We deliver creative media solutions...</p>
        </div>

        <div className="service-item" data-number="2" onClick={() => handleNavigate('/ContentWriting')}>
          <h3>Content Writing</h3>
          <p>We craft narratives that inspire action...</p>
        </div>

        <div className="service-item" data-number="3" onClick={() => handleNavigate('/marketing')}>
          <h3>Marketing</h3>
          <p>We craft innovative marketing strategies...</p>
        </div>

        <div className="service-item" data-number="4" onClick={() => handleNavigate('/it')}>
          <h3>IT</h3>
          <p>We develop user-friendly websites and mobile applications...</p>
        </div>
      </section>
    </section>
  </section>
  </>
);
}