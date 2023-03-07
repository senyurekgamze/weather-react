import React from "react";
import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Amsterdam" />
        <footer>
          This project was coded by{" "}
          <a
            href="www.linkedin.com/in/gamze-senyurek-087094147"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gamze Senyurek
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/senyurekgamze/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
