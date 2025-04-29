"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStarted = () => {
    router.push('/contact');
  };

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200"></div>
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 flex flex-col lg:flex-row items-center justify-between z-10">
        <div className={`lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Call IT Studio
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Top-quality service and expert management for every project need.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 shadow-md hover:shadow-lg transition-all"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className={`lg:w-1/2 flex justify-center transition-all duration-700 delay-150 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
          <div className="relative w-64 h-64 md:w-96 md:h-96 animate-pulse">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl"></div>
            <Image
              src={'/logo.png'}
              alt={'Call IT Studio Logo'}
              height={'400'}
              width={'400'}
              className="w-full h-full object-contain relative hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
