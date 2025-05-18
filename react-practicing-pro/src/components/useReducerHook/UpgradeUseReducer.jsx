import React, { useReducer } from "react";
// import React, {  useState } from "react";

const UpgradeUseReducer = () => {
  // const [count, setCount] = useState(0);

  const initialState = {
    count: 0,
  };
  const reducer = (state, action) => {
    // console.log(state, action);

    // if (action.type === "INCREMENT") {
    //   return state + 1;
    // }
    // if (action.type === "DECREMENT") {
    //   return state - 1;
    // }
    // if (action.type === "RESET") {
    //   return (state = 0);
    // }

    // to overcome from if statement use switch
    // switch (action.type) {
    //   case "INCREMENT":
    //     return state + 1;
    //   case "DECREMENT":
    //     return state - 1;
    //   case "RESET":
    //     return (state = 0);
    //   default:
    //     return state;
    // }

    // switch (action.type) {
    //   case "INCREMENT":
    //     // to access initialState = value of initialState is state value of useReducer Hook
    //     // write something like this state.count
    //     return { count: state.count + 1 };
    //   case "DECREMENT":
    //     return { count: state.count - 1 };
    //   case "RESET":
    //     return { count: 0 };
    //   default:
    //     return {};
    // }

    // better approach
    switch (action.type) {
      case "INCREMENT":
        // to access initialState = value of initialState is state value of useReducer Hook
        // write something like this state.count
        return { ...state, count: state.count + 1 };
      case "DECREMENT":
        return { ...state, count: state.count - 1 };
      case "RESET":
        return { count: 0 };
      default:
        return {};
    }
  };

  // here it can not be the same initial value 0 so use initialState
  //   const [count, dispatch] = useReducer(reducer, 0);
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(useReducer(reducer, 0));

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1>{state.count}</h1>
        {/* passing object in dispatch */}
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </>
  );
};

export default UpgradeUseReducer;
