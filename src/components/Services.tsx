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

const services = [
  {
    title: 'Media',
    description:
      'Elevate your brand and captivate your target audience with our media solutions.',
    icon: MonitorPlay,
    image: '/services/media.jpeg?height=200&width=300',
  },
  {
    title: 'Content Writing',
    description: 'Create narratives that inspire for action.',
    icon: PenLine,
    image: '/services/content_writer.webp?height=200&width=300',
  },
  {
    title: 'Marketing',
    description: 'Revolutionize marketing with innovative strategies.',
    icon: Presentation,
    image: '/services/marketing.webp?height=200&width=300',
  },
  {
    title: 'Web Development',
    description: 'Create powerful web applications for the web.',
    icon: Smartphone,
    image: '/services/web_development.png?height=200&width=300',
  },
  {
    title: 'IT Consulting',
    description: 'Expert advice to align your IT strategy with business goals.',
    icon: Zap,
    image: '/services/it_consulting.webp?height=200&width=300',
  },
  {
    title: 'Studio',
    description: 'We can manage your social handle effciently.',
    icon: KeyboardMusic,
    image: '/services/studio.webp?height=200&width=300',
  },
  {
    title: 'Event Management',
    description:
      'Get your important events professionally planned, managed and executed by us.',
    icon: Calendar,
    image: '/services/event_management.jpg?height=200&width=300',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-[0_12px_30px_-5px_hsl(var(--primary)/0.2),_0_6px_12px_-6px_hsl(var(--primary)/0.15)] hover:-translate-y-2"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
