import React, { useId, useRef } from "react";
// import React, { forwardRef } from "react";

const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username.current.value);
    console.log("Password:", password.current.value);
  };

  return (
    <>
      <h1>ForwardRef Hook</h1>
      <form oncSubmit={handleFormSubmit}>
        <BeforeReact19Component label="username" ref={username} /> <br />
        <BeforeReact19Component label="password" ref={password} /> <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

// Before React 19

// const BeforeReact19Component = forwardRef((props, ref) => {
//   const id = useId();
//   return (
//     <div>
//       <label htmlFor={id}>{props.label}</label>
//       <input type="text" ref={ref} />
//     </div>
//   );
// });

// After React 19

const BeforeReact19Component = (props) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input type="text" ref={props.ref} />
    </div>
  );
};

export default ForwardRef;
