import React from 'react';
import ReviewComponent from './ReviewComponent';
import './HeroSection.css';


const HeroSection = ({
  title,
  subTitle,
  primaryBtn,
  primaryBtnURL,
  secondaryBtn,
  secondaryBtnURL,
  withReview,
  avatars,
  starCount,
  rating,
  reviews,
  src,
  alt
}) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: title }} />
        {subTitle && <p className="hero-subtitle">{subTitle}</p>}

        <div className="hero-buttons">
          {/* {primaryBtn && (
            <PrimaryCTA title={primaryBtn} url={primaryBtnURL} />
          )}
          {secondaryBtn && (
            <SecondaryCTA title={secondaryBtn} url={secondaryBtnURL} />
          )} */}
        </div>

        {withReview && (
          <ReviewComponent
            avatars={avatars}
            starCount={starCount}
            rating={rating}
            reviews={reviews}
          />
        )}
      </div>

      <div className="hero-image-container">
        <div className="hero-image-wrapper">
          {src && alt && (
            <img
              //ref={imageRef}
              src={src}
              alt={alt}
              className="hero-image"
              draggable="false"
              loading="eager"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;