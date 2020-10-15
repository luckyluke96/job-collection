import React, { useState } from "react";
import "../App.css";

function ReadView(props) {
  return (
    <div id="readView">
      <h1>{props.element.title}</h1>

      <h3>{props.element.city}</h3>
      <h3>{props.element.employer}</h3>
      <p>{props.element.requirements}</p>
      <button id="returnToTable" onClick={() => props.returnToTable()}>
        Return to table
      </button>
    </div>
  );
}

export default ReadView;
