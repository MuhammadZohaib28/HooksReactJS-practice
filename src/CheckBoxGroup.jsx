import React, { useState } from "react";

const CheckBox = ({ checked, label, checkHandler }) => {
  return (
    <>
      <input type="checkbox" checked={checked} onChange={checkHandler} />
      <label>{label}</label>
    </>
  );
};

const CheckBoxGroup = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const handleCheck1Change = () => {
    setCheck1(!check1);
    setCheck2(false);
  };

  const handleCheck2Change = () => {
    setCheck2(!check2);
    setCheck1(false);
  };

  return (
    <div>
      <h1>
        Create a functional component called CheckboxGroup that displays a group
        of checkboxes and a button. Implement the necessary code using the
        useState hook to store and display the selected checkboxes when the
        button is clicked.
      </h1>
      <CheckBox
        checked={check1}
        label="I agree to terms and conditions"
        checkHandler={handleCheck1Change}
      />

      <CheckBox
        checked={check2}
        label="I do not agree to terms and conditions"
        checkHandler={handleCheck2Change}
      />
    </div>
  );
};

export default CheckBoxGroup;
