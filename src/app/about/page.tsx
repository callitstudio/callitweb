import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: '/placeholder.svg?height=300&width=300',
    bio: 'John has over 20 years of experience in the IT industry and founded Call IT Studio with a vision to provide innovative solutions to businesses worldwide.',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: '/placeholder.svg?height=300&width=300',
    bio: 'With a background in software engineering and cloud architecture, Jane leads our technical team in developing cutting-edge solutions for our clients.',
  },
  {
    name: 'Mike Johnson',
    role: 'Head of Client Relations',
    image: '/placeholder.svg?height=300&width=300',
    bio: 'Mike ensures that our clients receive top-notch service and support throughout their journey with Call IT Studio.',
  },
  {
    name: 'Sarah Lee',
    role: 'Lead Designer',
    image: '/placeholder.svg?height=300&width=300',
    bio: 'Sarah brings creativity and user-centric design principles to all our projects, ensuring intuitive and visually appealing solutions.',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        About Call IT Studio
      </h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Who Are We?
        </h2>
        <p className="text-gray-600 mb-4">
          We are a passionate team of creative and tech-savvy individuals who
          love working with digital solutions. With experts in media, IT, and
          marketing, each of us brings unique skills to the table. Together, we
          aim to inculcate creativity in technology to produce amazing results.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Our Mission
        </h2>
        <p className="text-gray-600 mb-4">
          At Call IT Studio, our mission is to empower businesses through
          innovative IT solutions. We strive to deliver cutting-edge technology
          services that drive growth, efficiency, and success for our clients.
        </p>
        <p className="text-gray-600 mb-4">
          With a team of experienced professionals and a commitment to
          excellence, we aim to be the go-to partner for all your IT needs, from
          cloud solutions to custom software development.
        </p>
        <p className="text-gray-600 mb-4">
          We offer a wide range of digital services designed to improve your
          brand. Our offerings are divided into three primary areas: marketing
          strategies, which include corporate identity, digital marketing, and
          content authoring; IT solutions, which include web and app
          development, SEO, and e-commerce; and media creation, which includes
          social media management, films, and animations. As a result, you
          receive unique designs that effectively blend imagination and
          technology to help your business compete online.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Our History
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            Founded in 2010
          </h3>
          <p className="text-gray-600 mb-4">
            Call IT Studio was established with a vision to bridge the gap
            between complex technology and business needs. Starting as a small
            team of passionate IT professionals, we`&apos;`ve grown into a full-service
            IT solutions provider trusted by businesses across various
            industries.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-primary">
            Growing Strong
          </h3>
          <p className="text-gray-600 mb-4">
            Over the years, we`&apos;`ve expanded our services, embraced new
            technologies, and built a reputation for delivering reliable,
            scalable, and innovative IT solutions. Our commitment to client
            success and continuous learning has been the cornerstone of our
            growth.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-primary">
            Looking to the Future
          </h3>
          <p className="text-gray-600">
            As we continue to evolve, we remain dedicated to staying at the
            forefront of technology trends, investing in our team`&apos;`s skills, and
            providing our clients with the tools they need to thrive in the
            digital age.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
