import React, { useEffect, useState } from "react";

const EffectChallenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="container">
      <h1>Effect Challenge</h1>
      <p>
        count : <span>{count}</span>
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>
        Name : <span> {name} </span>
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ border: "1px solid black" }}
      />
    </div>
  );
};

export default EffectChallenge;
