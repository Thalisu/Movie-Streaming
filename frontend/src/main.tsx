import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/globalStyles.css";
import { GlobalStyle } from "./styles/globalStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
