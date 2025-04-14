import React from "react";
import styled from "styled-components";

const StyledComponent = ({ rating }) => {
  const Bn = styled.button`
    color: white;
    background-color: ${(props) => (props.rating >= 8 ? "green" : "red")};
    padding: 0.5rem 1.5rem;
  `;

  const Ben = styled.h1({
    color: "#fff",
    backgroundColor: `${rating >= 9 ? "green" : "red"}`,
    padding: "0.5rem 1.5rem",
  });

  return (
    <>
      <Bn rating={rating}>Styled Component</Bn>
      <Ben rating={rating}>Styled Component</Ben>
    </>
  );
};

export default StyledComponent;
