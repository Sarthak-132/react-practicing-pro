import React, { useReducer } from "react";
// import React, {  useState } from "react";

const UseReducer = () => {
  // const [count, setCount] = useState(0);

  const reducer = (state, action) => {
    // console.log(state, action);

    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if (action.type === "DECREMENT") {
      return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  console.log(useReducer(reducer, 0));

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1>{count}</h1>
        {/* passing object in dispatch */}
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default UseReducer;
