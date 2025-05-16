'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-featured online shopping platform with advanced features.',
    image: '/placeholder.svg?height=300&width=400',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Healthcare Management System',
    description:
      'Digital solution for managing patient records and appointments.',
    image: '/placeholder.svg?height=300&width=400',
    tech: ['Angular', 'Python', 'PostgreSQL'],
  },
  {
    title: 'Financial Analytics Dashboard',
    description: 'Real-time data visualization for financial metrics.',
    image: '/placeholder.svg?height=300&width=400',
    tech: ['Vue.js', 'Django', 'MySQL'],
  },
  {
    title: 'Mobile Fitness App',
    description:
      'Cross-platform application for tracking fitness and nutrition.',
    image: '/placeholder.svg?height=300&width=400',
    tech: ['React Native', 'Firebase'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 xl:max-w-7xl 2xl:max-w-screen-2xl">
        {' '}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          {' '}
          Our Projects{' '}
        </h2>{' '}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner relative w-full h-[300px]">
                <Card className="flip-card-front absolute w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </Card>
                <Card className="flip-card-back absolute w-full h-full p-6 flex flex-col justify-center items-center text-center bg-primary text-white">
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
