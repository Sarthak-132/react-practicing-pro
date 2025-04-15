import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>state change</h1>
      <h3>{count}</h3>
      <button onClick={handleButtonClick}>Increment</button>
    </>
  );
};

export default State;
