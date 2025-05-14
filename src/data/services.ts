import {
  KeyboardMusic,
  Calendar,
  Smartphone,
  Zap,
  MonitorPlay,
  PenLine,
  Presentation,
} from 'lucide-react';

export const services = [
  {
    title: 'Media',
    slug: 'media',
    description:
      'Elevate your brand and captivate your target audience with our media solutions.',
    icon: MonitorPlay,
    image: '/services/media.jpeg?height=200&width=300',
  },
  {
    title: 'Content Writing',
    slug: 'content-writing',
    description: 'Create narratives that inspire for action.',
    icon: PenLine,
    image: '/services/content_writer.webp?height=200&width=300',
  },
  {
    title: 'Marketing',
    slug: 'marketing',
    description: 'Revolutionize marketing with innovative strategies.',
    icon: Presentation,
    image: '/services/marketing.webp?height=200&width=300',
  },
  // {
  //   title: 'Web Development',
  //   slug: 'web-development',
  //   description: 'Create powerful web applications for the web.',
  //   icon: Smartphone,
  //   image: '/services/web_development.png?height=200&width=300',
  // },
  {
    title: 'IT Consulting',
    slug: 'it-consulting',
    description: 'Expert advice to align your IT strategy with business goals.',
    icon: Zap,
    image: '/services/it_consulting.webp?height=200&width=300',
  },
  {
    title: 'Studio',
    slug: 'studio',
    description: 'We can manage your social handle effciently.',
    icon: KeyboardMusic,
    image: '/services/studio.webp?height=200&width=300',
  },
  {
    title: 'Event Management',
    slug: 'event-management',
    description:
      'Get your important events professionally planned, managed and executed by us.',
    icon: Calendar,
    image: '/services/event_management.jpg?height=200&width=300',
  },
];
