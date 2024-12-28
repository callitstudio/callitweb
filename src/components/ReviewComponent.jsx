import React from 'react';
//import AvatarGroup from './AvatarGroup';
import StarRating from './StarRating';
import './ReviewComponent.css';


const ReviewComponent = ({
  avatars,
  starCount = 0,
  rating,
  reviews
}) => {
  return (
    <div className="review-container">
      <div className="review-inner">
        <div className="review-content">
          {/* <div className="avatar-section">
            <AvatarGroup avatars={avatars} />
          </div> */}

          <div className="rating-section">
            <div className="rating-content">
              <StarRating count={starCount} />
              <p className="rating-text" dangerouslySetInnerHTML={{ __html: rating || '' }} />
            </div>
            <div className="reviews-text">
              <p dangerouslySetInnerHTML={{ __html: reviews || '' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;