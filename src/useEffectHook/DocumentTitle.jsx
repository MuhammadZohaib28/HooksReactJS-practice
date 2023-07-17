import React, { useEffect } from "react";

const DocumentTitle = () => {
  useEffect(() => {
    document.title = "My App";
  }, []);

  return (
    <div style={{ borderBottom: "2px solid green" }}>
      <h1>
        Create a functional component called DocumentTitle that updates the
        document title to "My App" when the component mounts using the useEffect
        hook.
      </h1>
      <h2>{document.title}</h2>
    </div>
  );
};

export default DocumentTitle;
