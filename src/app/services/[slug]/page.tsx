import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { services } from '@/data/services';
import { ArrowLeft, CheckCircle } from 'lucide-react';

// Example service benefits data (in a real app, this would come from a CMS or API)
const serviceBenefits = {
  'media': [
    'Professional video production for marketing campaigns',
    'Engaging social media content creation',
    'High-quality photography services',
    'Custom animation and motion graphics',
    'Live event coverage and streaming'
  ],
  'content-writing': [
    'SEO-optimized website content',
    'Engaging blog posts and articles',
    'Professional email newsletters',
    'Compelling product descriptions',
    'Brand storytelling and messaging'
  ],
  'marketing': [
    'Comprehensive marketing strategy development',
    'Social media marketing campaigns',
    'Email marketing automation',
    'Paid advertising management',
    'Analytics and performance tracking'
  ],
  'web-development': [
    'Responsive website design and development',
    'E-commerce solutions',
    'Content management systems',
    'Website maintenance and support',
    'Performance optimization'
  ],
  'it-consulting': [
    'IT infrastructure assessment and planning',
    'Cloud migration strategies',
    'Cybersecurity consulting',
    'Digital transformation roadmaps',
    'Technology stack recommendations'
  ],
  'studio': [
    'Professional recording facilities',
    'Podcast production services',
    'Voice-over recording',
    'Audio editing and mastering',
    'Music production'
  ],
  'event-management': [
    'Full-service event planning and coordination',
    'Venue selection and management',
    'Vendor coordination',
    'On-site event execution',
    'Post-event reporting and analysis'
  ]
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const serviceData = services.find((service) => service.slug === params.slug);
  
  if (!serviceData) {
    notFound();
  }

  const IconComponent = serviceData.icon;
  const benefits = serviceBenefits[params.slug as keyof typeof serviceBenefits] || [];
  
  // Filter out the current service from the related services list
  const relatedServices = services.filter((service) => service.slug !== params.slug);
  
  return (
    <>
      {/* Hero section */}
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <Link 
            href="/#services" 
            className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center mb-6">
                <IconComponent className="h-10 w-10 text-primary mr-4" />
                <h1 className="text-4xl font-bold text-primary">{serviceData.title}</h1>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 max-w-3xl">
                {serviceData.description}
              </p>
              
              {benefits.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">What We Offer</h2>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Get Started
              </Link>
            </div>
            
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-[400px] rounded-xl overflow-hidden">
              <Image
                src={serviceData.image}
                alt={serviceData.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Related services section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">Related Services</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden flex flex-col transition-all duration-300 ease-in-out shadow-md h-full"
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
    </>
  );
} 