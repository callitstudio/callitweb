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
    <section id="services" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Our Services
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              href={`/services/${service.slug}`}
              key={index}
              className="block"
            >
              <Card className="overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-[0_12px_30px_-5px_hsl(var(--primary)/0.2),_0_6px_12px_-6px_hsl(var(--primary)/0.15)] hover:-translate-y-2 h-full cursor-pointer">
                <div className="relative w-full h-48">
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
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
