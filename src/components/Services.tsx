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
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={200}
                className="w-full object-cover"
              />
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
