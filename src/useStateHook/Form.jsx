import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confPswrd: "",
  });

  const [storedValue, setStoredValue] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStoredValue(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      confPswrd: "",
    });
  };

  return (
    <div style={{ borderBottom: "2px solid red" }}>
      <h1 style={{ fontFamily: "sans-serif" }}>
        Create a functional component called Form that contains multiple input
        fields and a submit button. Implement the necessary code using the
        useState hook to capture the values entered in the input fields and
        display them when the button is clicked.
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />
        <input
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <input
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          type="password"
        />
        <input
          placeholder="Confirm Password"
          value={formData.confPswrd}
          onChange={handleChange}
          name="confPswrd"
          type="password"
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Stored Form Data:</h2>
        <ul>
          <li>
            <strong>Name:</strong> {storedValue.name}
          </li>
          <li>
            <strong>Email:</strong> {storedValue.email}
          </li>
          <li>
            <strong>Password:</strong> {storedValue.password}
          </li>
          <li>
            <strong>Confirm Password:</strong>{" "}
            {storedValue.confPswrd == storedValue.password
              ? storedValue.password
              : "Password is incorrect"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Form;
