import React, { useEffect, useState } from "react";

export default function ApiExample() {
  const [items, setItems] = useStates([]);

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
    <div className="container">
      <h5>Api Example :</h5>
      {items.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}
