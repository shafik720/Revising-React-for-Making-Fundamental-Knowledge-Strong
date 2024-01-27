import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UseReducerWithPayload from "./useReducerWithPayload.tsx";
import ReducerForm from "./ReducerForm.tsx";
import ApplyUseContextDiv from "./ApplyUseContextDiv.tsx";
import UseContext from "./useContext.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <UseContext>
    <React.StrictMode>
      <div className="text-center w-screen ">
        {/* <App />  */}
        {/* <UseReducer /> */}
        {/* <UseReducer2 /> */}
        {/* <UseReducer3 /> */}
        {/* <UseReducer4 />  */}
        {/* <UseReducerWithPayload />  */}
        {/* <ReducerForm />  */}
        <ApplyUseContextDiv />
      </div>
    </React.StrictMode>
  </UseContext>
);
