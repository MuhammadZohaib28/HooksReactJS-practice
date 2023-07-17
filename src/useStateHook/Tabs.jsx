import React, { useState } from "react";

const Tabs = () => {
  const [knowMe, setKnowMe] = useState(false);
  const [aboutMe, setAboutMe] = useState(false);
  const handleClick = () => {
    setKnowMe(!knowMe);
  };

  const handleClick2 = () => {
    setAboutMe(!aboutMe);
  };
  return (
    <div style={{ borderBottom: "2px solid red" }}>
      <h1 style={{ fontFamily: "sans-serif" }}>
        Create a functional component called Tabs that displays a set of tabs
        and their content. Implement the necessary code using the useState hook
        to switch between different tab content when a tab is clicked.
      </h1>
      <h1 onClick={handleClick} style={{ cursor: "pointer" }}>
        Know Me
      </h1>
      {knowMe && (
        <span style={{ transform: "translateX(10rem)" }}>
          Hello My Name Is Muhammad Zohaib
        </span>
      )}
      <h1 onClick={handleClick2} style={{ cursor: "pointer" }}>
        About Me
      </h1>
      {aboutMe && <h1>and I am learning ReactJS</h1>}
    </div>
  );
};

export default Tabs;
