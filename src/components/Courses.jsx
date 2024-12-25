import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Courses.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import FlipCard from "./FlipCard";
import courseImg from "../assets/images/courseImg.jpeg";

const categories = [
  { title: "Development", description: "Learn about Development and enhance your skills." },
  { title: "Painting", description: "Learn about Painting and enhance your skills." },
  { title: "Writing", description: "Learn about Writing and enhance your skills." },
  { title: "Videography", description: "Learn about Videography and enhance your skills." },
  { title: "Marketing", description: "Learn about Marketing and enhance your skills." },
  { title: "Graphic Design", description: "Learn about Graphic Design and enhance your skills." },
  { title: "SEO", description: "Learn about SEO and enhance your skills." },
  { title: "Data Science", description: "Learn about Data Science and enhance your skills." },
  { title: "Product Shoot", description: "Learn about Product Shoot and enhance your skills." },
  { title: "Branding", description: "Learn about Branding and enhance your skills." },
].map((category) => ({ ...category, image: courseImg }));

const featuredCourses = [
  {
    title: "Complete Web Development Course 2024",
    description: "Learn full-stack web development from scratch.",
    image: courseImg,
  },
  {
    title: "Advanced SEO Strategies",
    description: "Master the latest SEO techniques for better rankings.",
    image: courseImg,
  },
  {
    title: "Digital Marketing Mastery",
    description: "Become a pro at digital marketing with hands-on projects.",
    image: courseImg,
  },
];

function Courses() {
  return (
    <div>
    <div className="Blur"></div>
      <div className="courses-page">
        {/* Course Categories Section */}
        <h2>Course Categories</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper-container"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={`category-${index}`} className="swiper-slide">
              <FlipCard
                title={category.title}
                image={category.image}
                description={category.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Featured Courses Section */}
        <h2>Featured Courses</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper-container"
        >
          {featuredCourses.map((course, index) => (
            <SwiperSlide key={`featured-${index}`} className="swiper-slide">
              <FlipCard
                title={course.title}
                image={course.image}
                description={course.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Courses;
