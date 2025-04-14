import React from "react";
import WelcomeUser from "./WelcomeUser";

const EventPassProps = () => {
  const handleWelcomeUser = (user) => {
    /* Parameter */
    console.log(`Welcome ${user} In our company`);
  };

  const handleHover = () => {
    console.log("Hovering");
  };

  return (
    <>
      <WelcomeUser
        onClickClickButton={() => handleWelcomeUser("SarThak")}
        onMouseEnterHover={handleHover}
      />
    </>
  );
};

export default EventPassProps;
