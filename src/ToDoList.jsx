import React, { useState } from "react";

const ToDoList = () => {
  const [todo, setTodo] = useState("");
  const [saved, setSaved] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };



  const handleAdd = () => {
    setSaved([...saved, todo]);
    setTodo("");
  };

  const handleClear = () => {
    setSaved([])
  }
  return (
    <div style={{ borderBottom: "2px solid red" }}>
      <h1 style={{fontFamily: "sans-serif"}}>
        Create a functional component called TodoList that displays a list of
        todos. Implement the necessary code using the useState hook to add new
        todos when a button is clicked.
      </h1>
      <input onChange={handleChange} value={todo} />
      <button onClick={handleAdd}>Add Note</button>
      <button onClick={handleClear}>Clear</button>
      {saved.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
};

export default ToDoList;
