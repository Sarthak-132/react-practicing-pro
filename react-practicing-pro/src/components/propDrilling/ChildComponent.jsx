import React from "react";
import GrandChildCmponent from "./GrandChildCmponent";

const ChildComponent = (props) => {
  return (
    <>
      <h1>child component</h1>
      <GrandChildCmponent data={props.data} />
    </>
  );
};

export default ChildComponent;
