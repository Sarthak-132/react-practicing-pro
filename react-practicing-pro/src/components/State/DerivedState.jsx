import React, { useState } from "react";

const DerivedState = () => {
  const [Users, setUsers] = useState([
    { name: "Alice", age: 23 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 27 },
    { name: "David", age: 29 },
  ]);

  console.log(Users);

  const userCount = Users.length;

  const averageAge =
    Users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount; // accum = initial value = 0

  return (
    <>
      <hr />
      <h1>Derived state</h1>

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

      <p>Total Number of users : {userCount}</p>
      <p>averageAge = {averageAge}</p>
    </>
  );
};

export default DerivedState;
