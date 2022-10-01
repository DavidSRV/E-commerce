import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/scss/MainStyle.scss";
import { BrowserRouter } from "react-router-dom";
import CountProvider from "./context/CounterProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CountProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </CountProvider>
);
