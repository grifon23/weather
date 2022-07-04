import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router basename="https://grifon23.github.io/weather/">
      <App />
    </Router>
  </React.StrictMode>
);
