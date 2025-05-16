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
    image: '/services/new_media.png',
  },
  {
    title: 'Content Writing',
    slug: 'content-writing',
    description: 'Create narratives that inspire for action.',
    icon: PenLine,
    image: '/services/new_contant_writing.png',
  },
  {
    title: 'Marketing',
    slug: 'marketing',
    description: 'Revolutionize marketing with innovative strategies.',
    icon: Presentation,
    image: '/services/new_marketing.png',
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
    image: '/services/new_it.png',
  },
  {
    title: 'Studio',
    slug: 'studio',
    description: 'We can manage your social handle effciently.',
    icon: KeyboardMusic,
    image: '/services/new_studio.png',
  },
  {
    title: 'Event Management',
    slug: 'event-management',
    description:
      'Get your important events professionally planned, managed and executed by us.',
    icon: Calendar,
    image: '/services/new_event_managment.png',
  },
];
