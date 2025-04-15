import React, { useState } from "react";

const LiftingStateUp = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <Displaycomponent inputValue={inputValue} />
    </>
  );
};

export default LiftingStateUp;

const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <>
      <hr />
      <input
        type="text"
        placeholder="Enter Your Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

const Displaycomponent = ({ inputValue }) => {
  return (
    <>
      <p>Current Input value is : {inputValue} </p>
    </>
  );
};
