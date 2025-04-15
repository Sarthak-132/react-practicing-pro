import React, { useState } from "react";

const StateWork = () => {
  console.log("Parent component rendered");

  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <hr />
      <h1>How State Works</h1>
      <h3>{count}</h3>
      <button onClick={handleButtonClick}>Increment</button>
      <ChildComponent count={count} />
      <SiblingComponent />
    </>
  );
};

export default StateWork;

function ChildComponent({ count }) {
  console.log("Child component rendered");
  return <h1>Child Component - {count}</h1>;
}

// on refresh the page - It show two time because of strictmode. If we remove or comment out the strictmode then it will
// show only one time output.
// <React.StrictMode>
//    in index.js file
// </React.StrictMode>

// Parent component rendered
// Parent component rendered
// Child component rendered
// Child component rendered

function SiblingComponent() {
  console.log("Sibling component rendered");
  return <h1> Sibling Component </h1>;
}
