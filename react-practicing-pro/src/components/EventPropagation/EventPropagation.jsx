import React from "react";
import "../EventHandling/EV.css";

const EventPropagation = () => {
  const handleGrandClick = () => {
    console.log("grand div clicked");
  };

  const handleParentClick = () => {
    console.log("parent it is clicked");
  };

  const handleChildClick = () => {
    console.log("child div clicked");
  };

  return (
    <>
      <div className="Section">
        <div className="g-div" onClick={handleGrandClick}>
          <div className="p-div" onClick={handleParentClick}>
            <button className="c-div" onClick={handleChildClick}>
              child div
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPropagation;
