import { Fragment } from "react";

function ConditionalValues() {
  const name = "Rajat";
  const age = 20;

  const handleClicked = () => {
    console.log("what's up");
  };

  return (
    <Fragment>
      <h1>Conditional Values</h1>

      <h1>Name : {name}</h1>

      {/* Expression */}

      <p>{2 + "4"}</p>

      <button onClick={handleClicked}>{age >= 18 ? "adult" : "child"}</button>
    </Fragment>
  );
}

export default ConditionalValues;
