import React, { useState } from "react";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div style={{ borderBottom: "2px solid red" }}>
      <h1>
        Create a functional component called Dropdown that displays a dropdown
        select menu. Implement the necessary code using the useState hook to
        capture the selected option and display it.
      </h1>

    <select onChange={handleSelectChange} value={selectedOption}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
    </select>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default Dropdown;
