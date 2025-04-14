import React from "react";

const WelcomeUser = (props) => {
  const handleGreeting = () => {
    console.log("Greeting");
    props.onClickClickButton();
  };

  return (
    <>
      <button className="border-4" onClick={props.onClickClickButton}>
        Click
      </button>
      <button className="border-4" onMouseEnter={props.onMouseEnterHover}>
        hover
      </button>
      <button className="border-4" onClick={handleGreeting}>
        Greeting
      </button>
    </>
  );
};

export default WelcomeUser;
