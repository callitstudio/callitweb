import React from 'react';
import './Courses.css';

export default function Courses() {
  const categories = [
    'Development', 'Painting', 'Writing', 'Videography', 'Marketing',
    'Graphic Design', 'SEO', 'Data Science', 'Product Shoot', 'Branding'
  ];

  const featuredCourses = [
    { title: 'Complete Web Development Course 2024', author: 'Hammad Khan', rating: 4.5 },
    { title: 'Advanced SEO Strategies', author: 'Sara Ali', rating: 4.7 },
    { title: 'Digital Marketing Mastery', author: 'John Doe', rating: 4.6 }
  ];

  return (
    <div className="courses-page">
      {/* Search Section */}
      <section className="search-section">
        <input type="text" className="search-bar" placeholder="Search for courses" />
        <div className="filters">
          <button>Relevancy</button>
          <button>Alphabetically</button>
          <i className="filter-icon">🔍</i>
        </div>
      </section>

      {/* Course Categories */}
      <section className="course-categories">
        <h2>Course Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>{category}</div>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="courses-grid">
          {featuredCourses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="badge">Beginners</div>
              <h3>{course.title}</h3>
              <p>By {course.author}</p>
              <div className="rating">
                {'⭐'.repeat(Math.floor(course.rating))}
                {'☆'.repeat(5 - Math.floor(course.rating))}
              </div>
              <button className="start-learning-btn">Start Learning</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
