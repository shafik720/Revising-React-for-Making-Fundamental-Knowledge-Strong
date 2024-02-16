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
import UseReducerWithPayload3 from "./useReducerWithPayload3.tsx";
import UseContextExample2 from "./useContextExample2.tsx";
import ApplyContext2 from "./ApplyContext2.tsx";
import UseContext3 from "./useContextExample3.tsx";
import ApplyContext3 from "./ApplyContext3.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <UseContext3>
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
        {/* <UseReducerWithPayload2 /> */}
        {/* <UseReducerWithPayload3 />  */}
        {/* <ApplyContext2 />  */}
        <ApplyContext3 /> 
      </div>
    </React.StrictMode>
  </UseContext3>
);
