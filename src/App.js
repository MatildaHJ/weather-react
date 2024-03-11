import React from "react";
import Weather from "./Weather";
import "./Weather.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="main">
          <header className="App-header">
            <Weather defaultCity="Stockholm" />
          </header>
        </div>
        <footer>
          This is an{" "}
          <a
            href="https://github.com/MatildaHJ/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open source code
          </a>{" "}
          by <strong>Matilda Larsson</strong>
        </footer>
      </div>
    </div>
  );
}
