import {
  KeyboardMusic,
  Calendar,
  Smartphone,
  Zap,
  MonitorPlay,
  PenLine,
  Presentation,
  Camera,
  Video,
  Megaphone,
  StickyNote,
  Mail,
  BarChart,
  Globe,
  Share2,
  DatabaseBackup,
  ShieldCheck,
  Cloud,
  Mic,
  Music,
  Headphones,
  Users,
  Building,
  PartyPopper,
  Instagram,
  Film,
  ShoppingBag,
  PaintBucket,
  Scissors,
  Package,
  FileText,
  Search,
  BookOpen,
  LineChart,
  Laptop,
  Layout,
  Code,
  ShoppingCart,
  Palette,
  BarChart2,
  Monitor,
} from 'lucide-react';

export const subservices = {
  media: [
    {
      title: 'Social Media Management',
      slug: 'social-media-management',
      description:
        'We manage your social media presence to build brand awareness and engage with your audience effectively. Our strategies are tailored to enhance your online visibility, ensuring consistent and impactful communication across platforms.',
      icon: Instagram,
      image:
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop',
      parentService: 'media',
    },
    {
      title: 'DVC/TVC/Documentary',
      slug: 'dvc-tvc-documentary',
      description:
        "We produce compelling digital and television commercials, as well as insightful documentaries, that tell your brand's story. Our team ensures high-quality visuals and narratives that resonate with your target audience.",
      icon: Film,
      image:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'media',
    },
    {
      title: 'Product Shoot',
      slug: 'product-shoot',
      description:
        'Our professional product shoots capture the essence of your products with precision and creativity. We focus on showcasing your products in the best light, creating visuals that attract and convert potential customers.',
      icon: ShoppingBag,
      image:
        'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&auto=format&fit=crop',
      parentService: 'media',
    },
    {
      title: 'Visual Arts/Graphic Design',
      slug: 'visual-arts-graphic-design',
      description:
        "Our graphic design services bring your brand to life with visually stunning and creative designs. From logos to marketing materials, we ensure your brand's identity is both memorable and impactful.",
      icon: PaintBucket,
      image:
        'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop',
      parentService: 'media',
    },
    {
      title: 'Photo/Video Editing',
      slug: 'photo-video-editing',
      description:
        "We offer professional photo and video editing services that enhance your visual content. Our editing techniques ensure that your visuals are polished, engaging, and aligned with your brand's vision.",
      icon: Scissors,
      image:
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'media',
    },
    {
      title: '2D/3D Animation',
      slug: '2d-3d-animation',
      description:
        "Our 2D and 3D animation services add a dynamic dimension to your brand's storytelling. We create animations that captivate and communicate complex ideas in an accessible and visually appealing way.",
      icon: Package,
      image:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'media',
    },
  ],
  'content-writing': [
    {
      title: 'Engaging Content Creation',
      slug: 'engaging-content-creation',
      description:
        "We produce high-quality content that captures your audience's attention and communicates your message effectively. Our writing services cover a range of formats, including blogs, articles, and web content, tailored to your brand's voice.",
      icon: FileText,
      image:
        'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'content-writing',
    },
    {
      title: 'SEO-Optimized Writing',
      slug: 'seo-optimized-writing',
      description:
        'Our content is crafted with SEO best practices in mind to improve your search engine rankings and drive organic traffic. We ensure that every piece is optimized for relevant keywords while maintaining readability and engagement.',
      icon: Search,
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'content-writing',
    },
    {
      title: 'Strategic Storytelling',
      slug: 'strategic-storytelling',
      description:
        "We create compelling narratives making your target audience relate to it and support your brand's goals. By focusing on storytelling, we help you build a connection with readers, enhancing brand loyalty and credibility.",
      icon: BookOpen,
      image:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'content-writing',
    },
  ],
  marketing: [
    {
      title: 'Digital Marketing',
      slug: 'digital-marketing',
      description:
        'We develop strategic digital marketing campaigns that drive traffic, engagement, and conversions. Our data-driven approach ensures that your brand reaches the right audience and achieves measurable results.',
      icon: LineChart,
      image:
        'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'marketing',
    },
    {
      title: 'Product Design',
      slug: 'product-design',
      description:
        'We craft innovative product designs that blend functionality with aesthetics. Our approach ensures your products stand out in the market and meet user needs, enhancing both form and function.',
      icon: Layout,
      image:
        'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'marketing',
    },
    {
      title: 'Social Media Marketing',
      slug: 'social-media-marketing',
      description:
        'Strategic social media campaigns to build brand awareness and engagement.',
      icon: Share2,
      image:
        'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop',
      parentService: 'marketing',
    },
  ],
  'web-development': [
    {
      title: 'Responsive Web Design',
      slug: 'responsive-web-design',
      description: 'Mobile-friendly websites that look great on all devices.',
      icon: Smartphone,
      image:
        'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop',
      parentService: 'web-development',
    },
    {
      title: 'E-commerce Solutions',
      slug: 'ecommerce-solutions',
      description:
        'Custom online stores that drive sales and improve customer experience.',
      icon: Globe,
      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop',
      parentService: 'web-development',
    },
    {
      title: 'Website Maintenance',
      slug: 'website-maintenance',
      description:
        'Regular updates and support to keep your website secure and performing.',
      icon: StickyNote,
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop',
      parentService: 'web-development',
    },
  ],
  'it-consulting': [
    // {
    //   title: 'Cybersecurity',
    //   slug: 'cybersecurity',
    //   description:
    //     'Protect your business from threats with comprehensive security solutions.',
    //   icon: ShieldCheck,
    //   image:
    //     'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop',
    //   parentService: 'it-consulting',
    // },
    // {
    //   title: 'Cloud Solutions',
    //   slug: 'cloud-solutions',
    //   description:
    //     'Migrate and optimize your infrastructure with cloud-based technologies.',
    //   icon: Cloud,
    //   image:
    //     'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop',
    //   parentService: 'it-consulting',
    // },
    // {
    //   title: 'Data Management',
    //   slug: 'data-management',
    //   description:
    //     'Efficient data storage, backup, and recovery solutions for your business.',
    //   icon: DatabaseBackup,
    //   image:
    //     'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop',
    //   parentService: 'it-consulting',
    // },
    {
      title: 'DevOps Services',
      slug: 'devops-services',
      description:
        'Our DevOps services are designed to streamline your software development and IT operations, ensuring faster delivery, improved collaboration, and higher efficiency. We implement industry-standard DevOps practices including continuous integration and deployment (CI/CD), infrastructure as code (IaC), automated testing, and cloud environment management.',
      icon: Code,
      image:
        'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'it-consulting',
    },
    {
      title: 'Shopify Stores',
      slug: 'shopify-stores',
      description:
        'We build and optimize Shopify stores to help you succeed in the e-commerce space. Our services include setup, customization, and management to ensure your online store attracts and retains customers.',
      icon: ShoppingCart,
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'it-consulting',
    },
    {
      title: 'UI/UX Design',
      slug: 'ui-ux-design',
      description:
        'Our UI/UX design services prioritize user experience, creating intuitive and aesthetically pleasing interfaces. We focus on making your digital platforms easy to navigate, enhancing user satisfaction and engagement.',
      icon: Palette,
      image:
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'it-consulting',
    },
    {
      title: 'Search Engine Optimization',
      slug: 'search-engine-optimization',
      description:
        'We optimize your online presence to rank higher in search engine results, driving organic traffic to your website. Our SEO strategies are designed to improve visibility, boost engagement, and increase conversions.',
      icon: BarChart2,
      image:
        'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'it-consulting',
    },
    {
      title: 'Web Development',
      slug: 'web-development',
      description:
        "Our web development services create responsive, user-friendly websites tailored to your business needs. We focus on delivering high-performing websites that enhance your brand's digital experience and drive growth.",
      icon: Monitor,
      image:
        'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'it-consulting',
    },
    {
      title: 'App Development',
      slug: 'app-development',
      description:
        'We develop custom mobile applications that offer seamless user experiences across devices. Our apps are designed to meet your specific requirements, ensuring functionality, performance, and scalability.',
      icon: Smartphone,
      image:
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'it-consulting',
    },
  ],
  studio: [
    {
      title: 'Product Shoot',
      slug: 'product-shoot',
      description:
        "From stunning visuals to professional setups, we offer top-tier product photography services. Whether it's showcasing your products with vibrant shoots, providing professional models, or utilizing our well-equipped studio, we ensure your brand stands out. Additionally, our studio is available for rent for your own creative shoots.",
      icon: Camera,
      image:
        'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'studio',
    },
    {
      title: 'Podcast Production',
      slug: 'podcast-production',
      description:
        'Create impactful podcasts with our comprehensive production services, including recording, editing, and publishing. Our professional studio ensures the highest audio quality for your show.',
      icon: Mic,
      image:
        'https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'studio',
    },
    {
      title: 'Animation',
      slug: 'animation',
      description:
        'Bring your ideas to life with our animation services, offering both 3D and 2D animation. From conceptual storytelling to ad creation for Facebook and Instagram, we specialize in engaging, visually captivating content. For hunting and adventure enthusiasts, our "Pro Hunting" animations are perfect for immersive experiences.',
      icon: Video,
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      parentService: 'studio',
    },
  ],
  'event-management': [
    {
      title: 'Corporate Events',
      slug: 'corporate-events',
      description:
        'Professional planning and execution of business conferences and meetings.',
      icon: Building,
      image:
        'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-1.2.1&auto=format&fit=crop',
      parentService: 'event-management',
    },
    {
      title: 'Social Events',
      slug: 'social-events',
      description:
        'Memorable celebrations for weddings, birthdays, and special occasions.',
      icon: PartyPopper,
      image:
        'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop',
      parentService: 'event-management',
    },
    {
      title: 'Team Building',
      slug: 'team-building',
      description:
        'Engaging activities designed to strengthen team collaboration and morale.',
      icon: Users,
      image:
        'https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?ixlib=rb-1.2.1&auto=format&fit=crop',
      parentService: 'event-management',
    },
  ],
};

// Helper function to get related subservices for a specific service
export function getRelatedSubservices(serviceSlug: string) {
  return subservices[serviceSlug as keyof typeof subservices] || [];
}

// Helper function to get all subservices
export function getAllSubservices() {
  return Object.values(subservices).flat();
}
