import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainProvider from "./context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Root from "./root";
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <MainProvider>
        <Root />
      </MainProvider>
    </Router>
  </React.StrictMode>
);
