import React, { useEffect, useState } from "react";

const FetchOnButtonClick = () => {
  const [data, setData] = useState(null);

  const handleButtonClick = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/name/pakistan"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const handleButtonClear = () => {
    setData("");
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Fetch Data</button>
      <button onClick={handleButtonClear}>Clear</button>
      {data ? (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Click the button to fetch data.</p>
      )}
    </div>
  );
};

export default FetchOnButtonClick;
