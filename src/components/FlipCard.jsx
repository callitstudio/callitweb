
import React, { useState } from "react";
import "./FlipCard.css";

function FlipCard({ title, image, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (

    <div className="courseSection">

      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        {/* Front Side */}
        <div className="flip-card-front">
          <img src={image} alt="Course" className="card-image" />
          <h3 className="card-title">{title}</h3>
          <button className="description-btn" onClick={handleFlip}>
            Description
          </button>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <p className="card-description">{description}</p>
          <button className="description-btn" onClick={handleFlip}>
            Title
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
