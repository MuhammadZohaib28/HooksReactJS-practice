import React, { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  const [storedValue, setStoredValue] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleDisplay = () => {
    setStoredValue(input);
    setInput("");
  };
  return (
    <div style={{borderBottom: "2px solid red"}}>
      <h1 style={{ fontFamily: "sans-serif" }}>
        Create a functional component called Input that displays an input field
        and a button. Implement the necessary code using the useState hook to
        capture the value entered in the input field and display it when the
        button is clicked.
      </h1>
      <input
        placeholder="Write Something Here"
        value={input}
        onChange={handleInput}
      />
      <button onClick={handleDisplay}>Display Input</button>
      <h2>{storedValue}</h2>
    </div>
  );
};

export default Input;
