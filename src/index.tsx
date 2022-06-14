import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import React from "react";
import "./index.css";
import "./index.scss";
import App from "./components/App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
