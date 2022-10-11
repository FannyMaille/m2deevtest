import React, { useEffect, useState } from "react";

export default function ApiExample() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        // console.log(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container border border-secondary p-4">
      <h1 className='border-bottom mb-3 pb-3 border-secondary'>Api Example :</h1>
      {items.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}
