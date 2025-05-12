import React from "react";
import GrandGrandChildComponent from "./GrandGrandChildComponent";

const GrandChildCmponent = (props) => {
  return (
    <>
      <h1>Grand Child</h1>
      <GrandGrandChildComponent data={props.data} />
    </>
  );
};

export default GrandChildCmponent;
