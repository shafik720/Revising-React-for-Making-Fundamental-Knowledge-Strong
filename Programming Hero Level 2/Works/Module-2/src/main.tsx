import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UseReducerWithPayload from "./useReducerWithPayload.tsx";
import ReducerForm from "./ReducerForm.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="text-center w-screen ">
      {/* <App />  */}
      {/* <UseReducer /> */}
      {/* <UseReducer2 /> */}
      {/* <UseReducer3 /> */}
      {/* <UseReducer4 />  */}
      {/* <UseReducerWithPayload />  */}
      <ReducerForm /> 
    </div>
  </React.StrictMode>
);
