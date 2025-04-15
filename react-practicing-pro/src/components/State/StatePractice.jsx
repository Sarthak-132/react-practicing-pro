import React, { useState } from "react";

// const Users = [
//   { name: "Alice", age: 23 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 27 },
//   { name: "David", age: 29 },
// ];

const StatePractice = () => {
  const [Users, setUsers] = useState([
    { name: "Alice", age: 23 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 27 },
    { name: "David", age: 29 },
  ]);

  return (
    <>
      <hr />
      <h1>State Practice</h1>
      <ul>
        {Users.map((user, index) => {
          return (
            <li key={index}>
              <h2>
                {user.name} - {user.age} year old.
              </h2>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default StatePractice;
