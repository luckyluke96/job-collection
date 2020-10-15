import React, { useState } from "react";
import "../App.css";

function CreateView(props) {
  const [candidate, setCandidate] = useState();

  let profile = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    setCandidate(profile);
    props.addCandidate(profile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID: </label>
        <input
          type="text"
          required
          id="id"
          onChange={(e) => {
            profile[0] = e.target.value;
          }}
        ></input>

        <label>Title: </label>
        <input
          type="text"
          required
          id="title"
          onChange={(e) => {
            profile[1] = e.target.value;
          }}
        ></input>

        <label>Employer: </label>
        <input
          type="text"
          id="emp"
          onChange={(e) => {
            profile[2] = e.target.value;
          }}
        ></input>

        <label>City: </label>
        <input
          type="text"
          id="city"
          onChange={(e) => {
            profile[3] = e.target.value;
          }}
        ></input>

        <label>Requirements: </label>
        <input
          type="text"
          id="req"
          onChange={(e) => {
            profile[4] = e.target.value;
          }}
        ></input>

        <input id="submit" type="submit" value="Add Candidate"></input>
        <button id="returnToTable" onClick={() => props.returnToTable()}>
          Return to table
        </button>
      </div>
    </form>
  );
}

export default CreateView;
