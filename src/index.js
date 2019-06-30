import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Home from "./Components/HOME";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
