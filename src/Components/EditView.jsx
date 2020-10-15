import React, { useState } from "react";
import "../App.css";

function EditView(props) {
  const [candidate, setCandidate] = useState(props.element);

  let profile = [
    props.element._id,
    props.element.title,
    props.element.employer,
    props.element.city,
    props.element.requirements,
  ];

  const handleSubmit = (e) => {
    console.log("submit");
    console.log(profile[0]);
    e.preventDefault();
    setCandidate(profile);
    props.editCandidate(props.index, profile);
  };

  return (
    <div>
      <span id="editForm">
        <form onSubmit={handleSubmit}>
          <div>
            <label>ID: </label>
            <input
              placeholder={props.element._id}
              type="text"
              id="id"
              onChange={(e) => {
                profile[0] = e.target.value;
              }}
            ></input>

            <label>Title: </label>
            <input
              placeholder={props.element.title}
              type="text"
              id="title"
              onChange={(e) => {
                profile[1] = e.target.value;
              }}
            ></input>

            <label>Employer: </label>
            <input
              placeholder={props.element.employer}
              type="text"
              id="emp"
              onChange={(e) => {
                profile[2] = e.target.value;
              }}
            ></input>

            <label>City: </label>
            <input
              placeholder={props.element.city}
              type="text"
              id="city"
              onChange={(e) => {
                profile[3] = e.target.value;
              }}
            ></input>

            <label>Requirements: </label>
            <input
              placeholder={props.element.requirements}
              type="text"
              id="req"
              onChange={(e) => {
                profile[4] = e.target.value;
              }}
            ></input>

            <input id="submit" type="submit" value="Edit Candidate"></input>
            <button id="returnToTable" onClick={() => props.returnToTable()}>
              Return to table
            </button>
          </div>
        </form>
        <span></span>
      </span>
    </div>
  );
}

export default EditView;
