import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const handleSelect = (e) => {
    setColor(e.target.value);
    setSelectedColor(color);
  };

  return (
    <div style={{ borderBottom: "2px solid red" }}>
      <h1 style={{fontFamily: "sans-serif"}}>
        Create a functional component called ColorPicker that displays a color
        picker and a box with the selected color. Implement the necessary code
        using the useState hook to capture the selected color and update the box
        color accordingly.
      </h1>

      <input type="color" value={color} onChange={handleSelect} />
      <h1
        style={{
          color: "black",
          backgroundColor: color,
          width: "40%",
          margin: "1rem auto",
        }}
      >
        <span style={{backgroundColor: "lime"}}>{color}</span>
      </h1>
    </div>
  );
};

export default ColorPicker;
