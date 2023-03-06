import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="www.linkedin.com/in/gamze-senyurek-087094147"
            target="_blank"
          >
            Gamze Senyurek
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/senyurekgamze/weather-react"
            target="_blank"
          >
            open sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
