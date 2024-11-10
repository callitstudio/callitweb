import React from 'react';
import Shoot from "../assets/Media/shoot.jpeg";
import Card from "./Card";
import "./Events.css";  // Reuse the same CSS file

const Events = () => {
  return (
    <div className="event-section">
      <div className="event-cards">
        
        <div className="eventcard pop-up">
          <Card title="Events" 
        //   img={Shoot}
        //     des="Main event management and planning."
          />
        </div>

        <div className="eventcard left">
          <Card title="Venue" img={Shoot}
            des="Manage and arrange venue for the event."
          />
        </div>

        <div className="eventcard left">
          <Card title="Food" img={Shoot}
            des="Organize and provide catering services."
          />
        </div>

        <div className="eventcard left">
          <Card title="Artist" img={Shoot}
            des="Book artists and performers for the event."
          />
        </div>

      </div>
    </div>
  );
};

export default Events;
