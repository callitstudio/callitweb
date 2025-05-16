import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const courses = [
  // {
  //   title: 'Web Development Fundamentals',
  //   description:
  //     'Learn the basics of web development with HTML, CSS, and JavaScript.',
  //   duration: '8 weeks',
  //   price: '$299',
  //   image: '/placeholder.svg?height=200&width=300',
  // },
  // {
  //   title: 'Painting',
  //   description: 'Learn about Painting and enhance your skills.',
  //   duration: '10 weeks',
  //   price: '$399',
  //   image: '/placeholder.svg?height=200&width=300',
  // },
  // {
  //   title: 'Writing',
  //   description: 'Learn about Writing and enhance your skills.',
  //   duration: '12 weeks',
  //   price: '$499',
  //   image: '/placeholder.svg?height=200&width=300',
  // },
  // {
  //   title: 'Videography',
  //   description: 'Learn about Videography and enhance your skills.',
  //   duration: '12 weeks',
  //   price: '$499',
  //   image: '/placeholder.svg?height=200&width=300',
  // },
  // {
  //   title: 'Marketing',
  //   description: 'Learn about Marketing and enhance your skills.',
  //   duration: '12 weeks',
  //   price: '$499',
  //   image: '/placeholder.svg?height=200&width=300',
  // },
  // {
  //   title: 'Graphic Design',
  //   description: 'Learn about Graphic Design and enhance your skills.',
  //   duration: '12 weeks',
  //   price: '$499',
  //   image: '/placeholder.svg?height=200&width=300',
  // },
  // {
  //   title: 'SEO',
  //   description: 'Learn about SEO and enhance your skills.',
  //   duration: '12 weeks',
  //   price: '$499',
  //   image: '/placeholder.svg?height=200&width=300',
  // },
  // {
  //   title: 'Data Science',
  //   description: 'Learn about Data Science and enhance your skills.',
  //   duration: '12 weeks',
  //   price: '$499',
  //   image: '/placeholder.svg?height=200&width=300',
  // },
  // {
  //   title: 'Product Shoot',
  //   description: 'Learn about Product Shoot and enhance your skills.',
  //   duration: '12 weeks',
  //   price: '$499',
  //   image: '/placeholder.svg?height=200&width=300',
  // },
  // {
  //   title: 'Branding',
  //   description: 'Learn about Branding and enhance your skills.',
  //   duration: '12 weeks',
  //   price: '$499',
  //   image: '/placeholder.svg?height=200&width=300',
  // },
  {
    title: 'Complete Web Development Course 2025',
    description:
      'Learn the basics of web development with HTML, CSS, and JavaScript.',
    duration: '8 weeks',
    price: '$299',
    image: '/courses/web_development.webp?height=200&width=300',
  },
  {
    title: 'Advanced SEO Strategies',
    description: 'Master the latest SEO techniques for better ranking',
    duration: '10 weeks',
    price: '$399',
    image: '/courses/advanced_seo.webp?height=200&width=300',
  },
  {
    title: 'Digital Marketing Mastery',
    description: 'Become a pro at digital marketing with hands-on projects',
    duration: '12 weeks',
    price: '$499',
    image: '/courses/digital_marketing_mastery.webp?height=200&width=300',
  },
];

const Courses = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 xl:max-w-7xl 2xl:max-w-screen-2xl">
        {' '}
        <h2 className="text-3xl font-bold text-center mb-16 text-primary">
          {' '}
          Our Courses{' '}
        </h2>{' '}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                width={300}
                height={200}
                className="w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">
                    Duration: {course.duration}
                  </span>
                  <span className="text-lg font-bold text-primary">
                    {course.price}
                  </span>
                </div>
                <Button className="w-full">Enroll Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
