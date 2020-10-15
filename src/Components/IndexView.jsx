import React, { useState } from "react";
import "../App.css";

function IndexView(props) {
  return (
    <table id="table">
      <tr id="header">
        <th>Title</th>
        <th>Employer</th>
        <th>City</th>
        <th></th>
      </tr>
      {
        props.candidates.map((candidate, index) => {
          return (
            <tr>
              <td onClick={() => props.clickReadView(index)}>{candidate.title}</td>
              <td>{candidate.employer}</td>
              <td>{candidate.city}</td>
              <td>
                <button id="editButton" onClick={() => props.onEditClick(index)}>
                  Edit
                </button>
                <button id="deleteButton" onClick={() => props.onDeleteClick(index)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })
      }
    </table >
  )


}

export default IndexView;
