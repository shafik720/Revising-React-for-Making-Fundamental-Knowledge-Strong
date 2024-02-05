import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UseReducerWithPayload from "./useReducerWithPayload.tsx";
import ReducerForm from "./ReducerForm.tsx";
import ApplyUseContextDiv from "./ApplyUseContextDiv.tsx";
import UseContext from "./useContext.tsx";
import UseContextExample from "./UseContextExample.tsx";
import Test from "./test.tsx";
import UseReducerWithPayload2 from "./useReducerWithPayload2.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <UseContextExample>
    <React.StrictMode>
      <div className="text-center w-screen ">
        {/* <App />  */}
        {/* <UseReducer /> */}
        {/* <UseReducer2 /> */}
        {/* <UseReducer3 /> */}
        {/* <UseReducer4 />  */}
        {/* <UseReducerWithPayload />  */}
        {/* <ReducerForm />  */}
        {/* <ApplyUseContextDiv /> */}
        {/* <Test /> */}
        <UseReducerWithPayload2 />
      </div>
    </React.StrictMode>
  </UseContextExample>
);
