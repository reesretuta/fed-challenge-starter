import React, { useState } from "react";

import "./Card.scss";

export const Card = ({ program }) => {
  const [isActive, setActive] = useState('inactive');

  const handleClick = (e) => {
    e.preventDefault();
    setActive(isActive === 'inactive' ? 'active' : 'inactive');
  };

  const renderOverlay = () => {
    return program.workoutsCount && 
      <div className="workoutOverlay">
        <div className="count">{program.workoutsCount}</div>
        <div>WORKOUTS</div>
        <div>&#9733;</div>
      </div>;
    // used a star image of place of the 2 icons in designs, but could also grab the image from the sketch file, or use an .svg
  }

  const renderDetails = () => {
    return (program.time && program.miles) && 
      <span className="details">&#9733; {program.time} &#9733; {program.miles}</span>;
    // used a star image of place of the "playlist" icon, but could also grab the image from the sketch file, or use an .svg
  }

  return (
    <div className={`card ${isActive}`} onClick={handleClick}>
        <div className="thumb">
              <img src={program.thumb} />
              {renderOverlay()}
        </div>
        <div className="description">
            <img src={program.trainer} />
            <div className="title">{program.title}</div>
            { renderDetails() }
            <a href="#" >VIEW DETAILS</a>
        </div>
    </div>
  );
};
