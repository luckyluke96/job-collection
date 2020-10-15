import React, { useState } from "react";
import "./App.css";
import IndexView from "./Components/IndexView";
import Data from "./Components/Data/job_dataset.json";
import EditView from "./Components/EditView";
import CreateView from "./Components/CreateView";
import ReadView from "./Components/ReadView";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


function App() {
  const [showReadView, setShowReadView] = useState(false);
  const [showEditView, setShowEditView] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const [showCreateView, setShowCreateView] = useState(false);
  const [showIndexView, setshowIndexView] = useState(true);
  const [candIndex, setCandIndex] = useState(0);
  const [candidates, setCandidates] = useState(Data);
  const [showCreateButtonView, setShowCreateButtonView] = useState(true);

  let read;
  let edit;
  let successIcon;
  let table;
  let create;
  let createButton;

  function clickReadView(index) {
    setCandIndex(index);
    setShowReadView(true);
    setshowIndexView(false);
    setShowCreateView(false);
    setShowEditView(false);
    setShowSuccessIcon(false);
    setShowCreateButtonView(false);
  }

  /**
   *
   * @param {} candidate array of length 5
   */
  function addCandidate(candidate) {
    setCandidates([
      ...candidates,
      {
        _id: candidate[0],
        title: candidate[1],
        employer: candidate[2],
        city: candidate[3],
        requirements: candidate[4],
      },
    ]);
    setshowIndexView(true);
    setShowCreateView(false);
    setShowCreateButtonView(true);
  }
  function onDeleteClick(index) {
    {
      if (window.confirm("Are you sure you wish to delete this item?")) {
        deleteCandidate(index);
        setShowSuccessIcon(true);
      }
    }
  }

  function onNewCandidateClick() {
    setShowSuccessIcon(false);
    setShowCreateButtonView(false);
    setShowCreateView(true);
    setshowIndexView(false);
  }

  function editCandidate(index, candidate) {
    console.log("edit " + index);
    candidates[index] = {
      _id: candidate[0],
      title: candidate[1],
      employer: candidate[2],
      city: candidate[3],
      requirements: candidate[4],
    };
    setCandidates(candidates);
    setshowIndexView(false);
    setShowEditView(false);
    setShowReadView(true);
    setShowSuccessIcon(true);
  }

  function onEditClick(index) {
    setCandIndex(index);
    setShowEditView(true);
    setshowIndexView(false);
    setShowCreateView(false);
    setShowSuccessIcon(false);
    setShowCreateButtonView(false);
  }

  function deleteCandidate(index) {
    setShowSuccessIcon(false);
    var array = [...candidates];

    if (index !== -1) {
      array.splice(index, 1);
      setCandidates(array);
    }
  }

  function returnToTable() {
    setshowIndexView(true);
    setShowCreateView(false);
    setShowSuccessIcon(false);
    setShowEditView(false);
    setShowCreateButtonView(true);
    setShowReadView(false);
  }

  if (showCreateButtonView) {
    createButton = (
      <button id="createButton" onClick={() => onNewCandidateClick()}>
        Create new candidate profile
      </button>
    );
  }

  if (showSuccessIcon) {
    successIcon = (

      <button id="success" onClick={() => hideButton()}>
        You were successfull! <span>👍🏻</span>
      </button>

    );
  }

  function hideButton() {
    setShowSuccessIcon(false);
  }

  if (showReadView) {
    read = (
      <ReadView
        element={candidates[candIndex]}
        returnToTable={returnToTable}
      ></ReadView>
    );
  }

  if (showEditView) {
    edit = (
      <EditView
        editCandidate={editCandidate}
        element={candidates[candIndex]}
        index={candIndex}
        returnToTable={returnToTable}
      ></EditView>
    );
  }

  if (showCreateView) {
    create = (
      <CreateView
        addCandidate={addCandidate}
        returnToTable={returnToTable}
      ></CreateView>
    );
  }

  if (showIndexView) {
    table = <IndexView
      clickReadView={clickReadView}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
      candidates={candidates}
    ></IndexView>

  }


  return (
    <Router>
      <div>

        <span><Link id="indexViewLink" to="/" onClick={returnToTable}>Home </Link></span>

        <Switch>
          <div id="container">
            <Route exact path="/">
              <span>{table}</span>
            </Route>


            <span>{edit}</span>

            <span>{read}</span>

            <span>{createButton}</span>

            <span>{successIcon}</span>

            <span>{create}</span>
          </div>
        </Switch>
      </div>
    </Router >
  );
}



export default App;
