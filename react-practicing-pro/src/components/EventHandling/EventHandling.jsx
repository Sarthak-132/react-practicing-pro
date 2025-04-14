import React from "react";
import "./EV.css";

const EventHandling = () => {
  //   function handleClick() {
  //     alert("clicked");
  //   }

  const handleClick = (event) => {
    alert("clicked");
    console.log(event); //syntheticBase Event
    // console.log(event.target); //syntheticBase Event  -  <button></button>
    // console.log(event.type); //syntheticBase Event -  click
  };

  const handleWelcomeUser = (user) => {
    /* Parameter */
    console.log(`Welcome ${user} In our company`);
  };

  return (
    <>
      <button onClick={handleClick}>Click</button> <br />
      {/* // function component with named function: It will work multiple time onclick */}
      <button onClick={handleClick()}>Click</button> <br />
      {/* // It means Automatic call without click */}
      <button onClick={() => handleClick}>Click-2</button> <br />
      {/* // Fat Arrow Function - works only one time */}
      <button onClick={() => handleClick()}>Inline-Function</button> <br />
      {/* // Fat Arrow Function - works multiple time  */}
      <br />
      {/* // imp! passing arguments to event handlers */}
      {/* <button onClick={handleWelcomeUser("Rajat")}>Click here</button> /* Argument passing */}
      {/* can not give like this automatic run */}
      <button onClick={() => handleWelcomeUser("Rajat")}>Click here</button>
    </>
  );
};

export default EventHandling;
