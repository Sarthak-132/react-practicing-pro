function DynamicValues() {
  // variable
  const name = "Rajat";

  const handleClicked = () => {
    console.log("what's up");
  };

  return (
    <div>
      <h1>Dynamic Values</h1>

      <h1>Name : {name}</h1>

      {/* Expression */}

      <p>{2 + "4"}</p>

      <button onClick={handleClicked}>Click</button>
    </div>
  );
}

export default DynamicValues;
