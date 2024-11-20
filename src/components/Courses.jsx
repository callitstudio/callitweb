import React from "react";
import FlipCard from "./FlipCard";
import courseImg from "../assets/images/courseImg.jpeg"; 

function Courses() {
  // Define Categories with Default Descriptions and Images
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
    image: courseImg, // Use a default image for now
    description: `Learn about ${category} and enhance your skills.`,
  }));

  // Define Featured Courses
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

  return (
    <div className="courses-page">
      {/* Course Categories */}
      <h2>Course Categories</h2>
      <div className="courseSection">
        {categories.map((category, index) => (
          <FlipCard
            key={`category-${index}`}
            title={category.title}
            image={category.image}
            description={category.description}
          />
        ))}
      </div>

      {/* Featured Courses */}
      <div className="featureCourse">

      <h2>Featured Courses</h2>
      <div className="courseSection">
        {featuredCourses.map((course, index) => (
          <FlipCard
          key={`featured-${index}`}
          title={course.title}
          image={course.image}
          description={course.description}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
