import React, { useRef } from "react";

const UseRefHook = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // object
    console.log(username.current.value);
    console.log(password.current.value);
  };

  return (
    <>
      <h1>UseRef</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="username" ref={username} /> <br />
        <input type="text" id="password" ref={password} /> <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UseRefHook;
