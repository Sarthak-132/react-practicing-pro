import React, { useEffect, useState } from "react";

const UseEffecthook_1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    return () => {
      console.log("coun : ", count);
    };
  }, [count]);
  return (
    <>
      <h1>UseEffecthook</h1>
      <span>{count}</span> <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default UseEffecthook_1;
