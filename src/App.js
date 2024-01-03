import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a>
        Bringing Weather to Life, One Forecast at a Time
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
