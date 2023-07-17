import React, { useEffect } from "react";

const ResizeListener = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized!");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div style={{ borderBottom: "2px solid green" }}>
        <h1>
          Create a functional component called ResizeListener that logs "Window
          resized!" whenever the window is resized using the useEffect hook.
        </h1>
      </div>
    </>
  );
};

export default ResizeListener;
