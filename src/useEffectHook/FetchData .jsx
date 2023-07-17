import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [fetched, setFetched] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/name/pakistan"
        );
        const data = await response.json();
        console.log("Fetched data:", { data });
        setFetched({ data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{ borderBottom: "2px solid green" }}>
      <h1>
        Create a functional component called FetchData that fetches data from an
        API and logs it to the console when the component mounts using the
        useEffect hook.
      </h1>
      <pre>
        Fetched data:
        {fetched ? JSON.stringify(fetched, null, 2) : "Loading..."}
      </pre>
    </div>
  );
};

export default FetchData;
