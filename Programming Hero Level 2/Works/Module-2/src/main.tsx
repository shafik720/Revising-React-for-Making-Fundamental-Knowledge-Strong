import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import UseReducer from "./useReducer.tsx";
import "./index.css";
import UseReducer2 from "./UseReducer2.tsx";
import UseReducer3 from "./useReducer3.tsx";
import UseReducer4 from "./UseReducer4.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="text-center w-screen ">
      {/* <App />  */}
      {/* <UseReducer /> */}
      {/* <UseReducer2 /> */}
      {/* <UseReducer3 /> */}
      <UseReducer4 /> 
    </div>
  </React.StrictMode>
);
