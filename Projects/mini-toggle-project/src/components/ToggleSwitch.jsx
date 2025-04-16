import React, { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";

const ToggleSwitch = () => {
  const [Ison, SetOn] = useState(false);

  const handleToggleSwitch = () => {
    SetOn(!Ison);
  };

  const checkIsOn = Ison ? "ON" : "OFF";
  const checkColor = Ison ? "on" : "off";
  const toggleBgColor = { backgroundColor: Ison ? "green" : "red" };

  return (
    <>
      <h1>
        Toggle Switch
        <IoIosSwitch style={{ color: Ison ? "green" : "red" }} />
      </h1>
      <div
        className="toggle-switch"
        //   style={{ backgroundColor: Ison ? "green" : "red" }}
        style={toggleBgColor}
        onClick={handleToggleSwitch}
      >
        {/* <div className={`switch ${Ison ? "on" : "off"}`} > */}
        <div className={`switch ${checkColor}`}>
          {/* <span className="switch-state">{Ison ? "ON" : "OFF"}</span> */}
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};

export default ToggleSwitch;
