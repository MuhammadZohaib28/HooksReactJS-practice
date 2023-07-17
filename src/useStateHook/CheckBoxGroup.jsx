import React, { useState } from "react";

const toppings = [
  { name: "Golden Corn", checked: false },
  { name: "Paneer", checked: false },
  { name: "Tomato", checked: false },
  { name: "Mushroom", checked: false },
  { name: "Onion", checked: false },
  { name: "Black Olives", checked: false },
  { name: "Veggies", checked: false },
];

const CheckBox = ({ isChecked, label, checkHandler, index }) => {
  return (
    <>
      <input
        id={index}
        type="checkbox"
        onChange={checkHandler}
        checked={isChecked}
      />
      <label>{label}</label>
    </>
  );
};

const CheckBoxGroup = () => {
  const [toppinggs, setToppings] = useState(toppings);

  const handleChange = (index) => {
    console.log(index);
    setToppings(
      toppinggs.map((topping, currindex) => {
        return currindex === index
          ? { ...topping, checked: !topping.checked }
          : topping;
      })
    );
  };

  const selectAll = () => {
    setToppings(
      toppinggs.map((topping) => {
        return { ...topping, checked: true };
      })
    );
  };

  const disselectAll = () => {
    setToppings(
      toppinggs.map((topping) => {
        return { ...topping, checked: false };
      })
    );
  };

  return (
    <div style={{ borderBottom: "2px solid red" }}>
      <h1>
        Create a functional component called CheckboxGroup that displays a group
        of checkboxes and a button. Implement the necessary code using the
        useState hook to store and display the selected checkboxes when the
        button is clicked.
      </h1>
      {toppinggs.map((item, index) => {
        return (
          <CheckBox
            key={index}
            isChecked={item.checked}
            label={item.name}
            checkHandler={() => handleChange(index)}
          />
        );
      })}
      <button onClick={selectAll}>Select All</button>
      <button onClick={disselectAll}>Unselect All</button>

      <pre>
        {JSON.stringify(
          toppinggs.map((item) => {
            return item.checked === true ? item.name : "Not Selected";
          }),
          null,
          4
        )}
      </pre>
    </div>
  );
};

export default CheckBoxGroup;
