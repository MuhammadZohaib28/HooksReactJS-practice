import React, { useState } from "react";
import Message from "./Message";
import Counter from "./Counter";
import Toggle from "./Toggle";
import Input from "./Input";
import ColorPicker from "./ColorPicker";
import ToDoList from "./ToDoList";
import Tabs from "./Tabs";
import Form from "./Form";
import "./App.css";
import CheckBoxGroup from "./CheckBoxGroup";

const App = () => {
  const [names, setNames] = useState([]);
  const [currInd, setCurrInd] = useState(0);
  const [code, setCode] = useState(false);

  const data = ["Zohaib", "Ahmed", "Faizan", "Kashif", "Taimoor"];

  const handleClick = () => {
    if (currInd < data.length) {
      setNames([...names, data[currInd]]);
      setCurrInd(currInd + 1);
    }
  };

  const handleClear = () => {
    setNames([]);
    setCurrInd(0);
  };

  const handleCode = () => {
    setCode(!code);
  };
  return (
    <>
      <div style={{ borderBottom: "2px solid red" }}>
        <h1 style={{ fontFamily: "sans-serif" }}>
          Here is the practice of useState Hook in ReactJS
        </h1>
        <button onClick={handleClick}>Click here</button>
        <button onClick={handleClear}>Clear All</button>
        <button onClick={handleCode}>View Code</button>
        {names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
        {code && <p></p>}
      </div>
      <ul>
        <li>
          <Message />
        </li>
        <li>
          <Counter />
        </li>
        <li>
          <Toggle />
        </li>
        <li>
          <Input />
        </li>
        <li>
          <ColorPicker />
        </li>
        <li>
          <ToDoList />
        </li>
        <li>
          <Tabs />
        </li>
        <li>
          <Form />
        </li>
        <li>
          <CheckBoxGroup />
        </li>
      </ul>
    </>
  );
};

export default App;
