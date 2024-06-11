import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [isDisplay, setIsDisplay] = useState(true);

  function DisplayComponent() {
    setIsDisplay(!isDisplay);
  }

  console.log(isDisplay);

  return (
    <div className="App">
      <button onClick={DisplayComponent}>Display</button>
      {isDisplay && <h1>Button is Enabled</h1>}
    </div>
  );
}

export default App;
