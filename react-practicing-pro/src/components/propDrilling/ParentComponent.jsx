import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <>
      <section className="text-white bg-black-500">
        <h1>first Component</h1>
        <ChildComponent data="React hoon main" />
      </section>
    </>
  );
};

export default ParentComponent;
