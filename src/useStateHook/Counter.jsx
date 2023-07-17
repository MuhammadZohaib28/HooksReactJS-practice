import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCounter = () => {
    setCount(count + 1);
  };

  const handleClear = () => {
    setCount(0);
  };
  return (
    <div style={{borderBottom: "2px solid red"}}>
      <h1 style={{fontFamily: "sans-serif"}}>
        Create a functional component called Counter that displays a count
        value. Implement the necessary code using the useState hook to increment
        the count by 1 when a button is clicked.
      </h1>
      <button onClick={handleCounter}>Count</button>
      <button onClick={handleClear}>Clear</button>
      <h2>{count}</h2>
    </div>
  );
};

export default Counter;
