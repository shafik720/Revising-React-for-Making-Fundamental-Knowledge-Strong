import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import UseReducer from "./useReducer.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="text-center w-screen ">
      <UseReducer />
    </div>
  </React.StrictMode>
);
