// import React, { useContext } from "react";
// import { BioContext, useBioContext } from "react";
import { BioContext, use } from "react";

const ContextHook = () => {
  // in case of context API
  // const { myName, age } = useContext(BioContext);

  // in case of custom hook
  // const { myName, age } = useBioContext();

  // in case of use hook
  // const { myName, age } = use(BioContext);

  // in case of use hook with condition
  const newHook = true;
  let myName, age;
  if (newHook) {
    ({ myName, age } = use(BioContext));
  }

  return (
    <>
      <h1>
        hellloooo I'm {myName} and {age} old
      </h1>
    </>
  );
};

export default ContextHook;
