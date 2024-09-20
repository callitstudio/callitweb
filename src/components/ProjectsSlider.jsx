import React from 'react';
import Slider from 'react-slick';
import './ProjectsSlider.css';

export const ProjectsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="projects">
      <h2>PROJECTS</h2>
      <Slider {...settings}>
        <div className="project-card">Project 1</div>
        <div className="project-card">Project 2</div>
        <div className="project-card">Project 3</div>
        <div className="project-card">Project 4</div>
        <div className="project-card">Project 5</div>
      </Slider>
    </section>
  );
};


