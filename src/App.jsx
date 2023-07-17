import React, { useState } from "react";
import Message from "./useStateHook/Message";
import Counter from "./useStateHook/Counter";
import Toggle from "./useStateHook/Toggle";
import Input from "./useStateHook/Input";
import ColorPicker from "./useStateHook/ColorPicker";
import ToDoList from "./useStateHook/ToDoList";
import Tabs from "./useStateHook/Tabs";
import Form from "./useStateHook/Form";
import "./App.css";
import CheckBoxGroup from "./useStateHook/CheckBoxGroup";
import app from "../src/images/app.jpg";
import Dropdown from "./useStateHook/Dropdown";
import DocumentTitle from "./useEffectHook/DocumentTitle";
import FetchData from "./useEffectHook/FetchData ";
import ResizeListener from "./useEffectHook/ResizeListener";
import Timer from "./useEffectHook/Timer";
import FetchOnButtonClick from "./useEffectHook/FetchOnButtonClick";

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
    setCode(null);
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
        {code && <img src={app} style={{ height: "30rem" }} />}
      </div>

      <h1
        style={{ textAlign: "center", fontWeight: "bolder", fontSize: "4rem" }}
      >
        USE STATE HOOKS
      </h1>

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
        <li>
          <Dropdown />
        </li>
      </ul>

      <h1
        style={{ textAlign: "center", fontWeight: "bolder", fontSize: "4rem" }}
      >
        USE EFFECT HOOKS
      </h1>
      <ul>
        <li>
          <DocumentTitle />
        </li>
        <li>
          <FetchData />
        </li>
        <li>
          <ResizeListener />
        </li>
        <li>
          <Timer />
        </li>
        <li>
          <FetchOnButtonClick />
        </li>
      </ul>
    </>
  );
};

export default App;
