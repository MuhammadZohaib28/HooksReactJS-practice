import React, { useState } from "react";

const Toggle = () => {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible(!visible);
  };
  return (
    <div style={{borderBottom: "2px solid red"}}>
      <h1 style={{fontFamily: "sans-serif"}}>
        Create a functional component called Toggle that displays a button.
        Implement the necessary code using the useState hook to toggle the
        visibility of a message when the button is clicked.
      </h1>
      <button onClick={handleToggle}>Toggle</button>
      {visible && <h2>Msg is visible now</h2>}
    </div>
  );
};

export default Toggle;
