import React, { useState } from "react";

const NottoFetchlikethisAPI = () => {
  const [apiData, setData] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error("Error fetching data:", error));

  return (
    <div className="container effect-container">
      <ul>
        data :
        {apiData.map((item) => {
          return <li key={item.id}> {item.title} </li>;
        })}
      </ul>
    </div>
  );
};

export default NottoFetchlikethisAPI;
