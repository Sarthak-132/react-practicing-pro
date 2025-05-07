import React, { useEffect, useState } from "react";

const CleanUpFunction = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="counter">
          <p>Subscribe</p>
          <div className="odometer" id="odometer">
            {count}
          </div>
          <h3 className="title">
            Subscribe <br /> Real time Center
          </h3>
        </div>
      </div>
    </>
  );
};

export default CleanUpFunction;
