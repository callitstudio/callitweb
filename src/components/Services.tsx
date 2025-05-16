'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  KeyboardMusic,
  Calendar,
  Smartphone,
  Zap,
  MonitorPlay,
  PenLine,
  Presentation,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 xl:max-w-7xl 2xl:max-w-screen-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          Our Services
        </h2>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              href={`/services/${service.slug}`}
              key={index}
              className="block flip-card h-[350px]"
            >
              <div className="flip-card-inner relative w-full h-full">
                <Card className="flip-card-front absolute w-full h-full overflow-hidden">
                  <div className="relative w-full h-56">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <CardHeader className="p-0 pb-4">
                      <service.icon className="h-8 w-8 text-primary mb-3" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      {/* Description hidden */}
                    </CardContent>
                  </div>
                </Card>

                <Card className="flip-card-back absolute w-full h-full p-6 flex flex-col justify-center items-center text-center bg-primary text-white">
                  <service.icon className="h-16 w-16 mb-6" />
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  {/* Description hidden */}
                  <span className="mt-4 py-2 px-4 bg-white/20 rounded-md inline-block">
                    Learn More
                  </span>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Services;
