import React, { useState } from "react";

const Message = () => {
  const [displayMsg, setDisplayMsg] = useState("");

  const handleMessage = () => {
    setDisplayMsg("Message");
  };

  const handleClear = () => {
    setDisplayMsg("");
  };
  return (
    <div style={{borderBottom: "2px solid red"}}>
      <h1 style={{fontFamily: "sans-serif"}}>
        Create a functional component called Message that displays a message.
        Implement the necessary code using the useState hook to store and
        display the message.
      </h1>
      <button onClick={handleMessage}>Display Message</button>
      <button onClick={handleClear}>Clear</button>
      <h2>{displayMsg}</h2>
    </div>
  );
};

export default Message;
