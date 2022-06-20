import React from "react";
import "./index.css";
import { createRoot } from 'react-dom/client';
import reportWebVitals from "./reportWebVitals";
import App from "./containers/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
