import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./globals.css";   // ✅ FIXED PATH

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
