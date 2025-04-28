import React, { useState } from "react";

const UseStateChallenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleIncrement = () => {
    // Prevent increment from exceeding 100
    const newCount = count + step;
    setCount(newCount > 100 ? 100 : newCount);
  };

  const handleDecrement = () => {
    // Prevent decrement from going below 0
    const newCount = count - step;
    setCount(newCount < 0 ? 0 : newCount);
  };

  const handleReset = () => {
    setCount(0);
    setStep(0); // Also reset the step value
  };

  return (
    <div className="container state-container">
      <h1>UseState Challenge</h1>
      <p>
        count : <span>{count}</span>
      </p>
      <div>
        <label>
          step:
          <input
            type="number"
            style={{ border: "1px solid black" }}
            value={step}
            min="0"
            max="100"
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="grid-three-cols">
        <button
          onClick={handleIncrement}
          disabled={count >= 100 || count + step > 100}
        >
          + increment
        </button>{" "}
        <br />
        <button onClick={handleDecrement} disabled={count <= 0}>
          - decrement
        </button>{" "}
        <br />
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
};

export default UseStateChallenge;
