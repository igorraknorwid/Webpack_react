import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import React from "react";
import "./index.css";

function App() {
  return (
    <div className='app'>
      <h1>Webpack5+React18</h1>
      <h2>June 6, 2022</h2>
      <p>Created by Igor Rak</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
