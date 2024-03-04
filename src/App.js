import React from "react";

import Weather from "./Weather";
import Forecast from "./Forecast";
import "./Weather.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
        </header>
        <Forecast />
      </div>
    </div>
  );
}

export default App;
