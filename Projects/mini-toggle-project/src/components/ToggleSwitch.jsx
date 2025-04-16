import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const [Ison, SetOn] = useState(false);

  const handleToggleSwitch = () => {
    SetOn(!Ison);
  };

  return (
    <div
      className="toggle-switch"
      style={{ backgroundColor: Ison ? "green" : "red" }}
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${Ison ? "on" : "off"}`}>
        <span className="switch-state">{Ison ? "ON" : "OFF"}</span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
