import React, { useState } from "react";
import FlipCard from "./FlipCard";
import courseImg from "../assets/images/courseImg.jpeg";

function Courses() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  const categories = [
    "Development",
    "Painting",
    "Writing",
    "Videography",
    "Marketing",
    "Graphic Design",
    "SEO",
    "Data Science",
    "Product Shoot",
    "Branding",
  ].map((category) => ({
    title: category,
    image: courseImg,
    description: `Learn about ${category} and enhance your skills.`,
  }));

  const featuredCourses = [
    {
      title: "Complete Web Development Course 2024",
      image: courseImg,
      description: "Learn full-stack web development from scratch.",
    },
    {
      title: "Advanced SEO Strategies",
      image: courseImg,
      description: "Master the latest SEO techniques for better rankings.",
    },
    {
      title: "Digital Marketing Mastery",
      image: courseImg,
      description: "Become a pro at digital marketing with hands-on projects.",
    },
  ];

  const handleNext = (list, setter, currentIndex) => {
    setter((currentIndex + 1) % list.length);
  };

  const handlePrev = (list, setter, currentIndex) => {
    setter((currentIndex - 1 + list.length) % list.length);
  };

  return (
    <div className="courses-page">
      {/* Course Categories */}
      <h2>Course Categories</h2>
      <div className="slider-container">
        <button
          className="slider-button prev"
          onClick={() => handlePrev(categories, setCurrentCategoryIndex, currentCategoryIndex)}
        >
          &#8249;
        </button>
        <div className="slider">
          {categories.map((category, index) => (
            <div
              className={`slide ${
                index === currentCategoryIndex ? "active" : "hidden"
              }`}
              key={`category-${index}`}
            >
              <FlipCard
                title={category.title}
                image={category.image}
                description={category.description}
              />
            </div>
          ))}
        </div>
        <button
          className="slider-button next"
          onClick={() => handleNext(categories, setCurrentCategoryIndex, currentCategoryIndex)}
        >
          &#8250;
        </button>
      </div>

      {/* Featured Courses */}
      <h2>Featured Courses</h2>
      <div className="slider-container">
        <button
          className="slider-button prev"
          onClick={() => handlePrev(featuredCourses, setCurrentFeaturedIndex, currentFeaturedIndex)}
        >
          &#8249;
        </button>
        <div className="slider">
          {featuredCourses.map((course, index) => (
            <div
              className={`slide ${
                index === currentFeaturedIndex ? "active" : "hidden"
              }`}
              key={`featured-${index}`}
            >
              <FlipCard
                title={course.title}
                image={course.image}
                description={course.description}
              />
            </div>
          ))}
        </div>
        <button
          className="slider-button next"
          onClick={() => handleNext(featuredCourses, setCurrentFeaturedIndex, currentFeaturedIndex)}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Courses;
