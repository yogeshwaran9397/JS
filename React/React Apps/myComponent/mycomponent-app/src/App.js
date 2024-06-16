import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function renderComponent(isDisplay) {
  if (isDisplay) {
    return (
      <div>
        <h1>Button is Enabled</h1>
        {renderFormComponent(isDisplay)}
      </div>
    );
  }
}

function handleSubmit(e) {
  e.preventDefault();
}

function renderFormComponent(isDisplay) {
  if (isDisplay) {
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" id="fname" name="fname"></input>
        <input type="text" id="lname" name="lname"></input>
        <button>Submit</button>
      </form>
    );
  }
}

function App() {
  const [isDisplay, setIsDisplay] = useState(true);

  function DisplayComponent() {
    setIsDisplay(!isDisplay);
  }

  console.log(isDisplay);

  return (
    <div className="App">
      <button onClick={DisplayComponent}>Display</button>
      {renderComponent(isDisplay)}
    </div>
  );
}

export default App;
