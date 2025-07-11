import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    name: 'Anna Doe',
    company: 'Tech Corp',
    rating: 5,
    review: 'Exceptional service and outstanding results. Highly recommended!',
    image: '/avatars/person_1.png?height=100&width=100',
  },
  {
    name: 'Jane Smith',
    company: 'Digital Solutions',
    rating: 4,
    review: 'Great team to work with. They delivered our project on time.',
    image: '/avatars/person_2.png?height=100&width=100',
  },
  {
    name: 'Mike Johnson',
    company: 'Innovation Labs',
    rating: 5,
    review: 'Professional team with excellent technical expertise.',
    image: '/avatars/person_3.png?height=100&width=100',
  },
];

const Reviews = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-100">
      <div className="container mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 xl:max-w-7xl 2xl:max-w-screen-2xl">
        {' '}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          {' '}
          Client Reviews{' '}
        </h2>{' '}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating
                            ? 'fill-primary text-primary'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{review.review}</p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-10 w-10 rounded-full"
                      width={50}
                      height={50}
                      src={review.image}
                      alt={review.name}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {review.name}
                    </p>
                    <p className="text-sm text-gray-500">{review.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
