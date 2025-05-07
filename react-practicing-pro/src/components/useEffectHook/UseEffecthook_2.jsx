import React, { useEffect, useState } from "react";

const UseEffecthook_2 = () => {
  const [date, setDate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="contain">
        <h1>UseEffecthook_2</h1>
        <p style={{ color: "red" }}>{date}</p>
      </div>
    </>
  );
};

export default UseEffecthook_2;
