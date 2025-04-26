import React, { useState } from "react";
import "./App.css"; 

function ControlledForm() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedName(name); 
    setName(""); 
  };

  return (
    <div className="container">
      <div className="card">
        <form onSubmit={handleSubmit} className="form">
          <h2>Enter Your Name</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleChange}
            className="input"
          />
          <button type="submit" className="button">
            Submit
          </button>

          {submittedName && (
            <div className="message">
              <strong>Submitted Name:</strong>
              <p>{submittedName}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ControlledForm;
