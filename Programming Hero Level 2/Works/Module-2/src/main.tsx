import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HigherOrderComponent3 } from "./HigherOrderComponents3.tsx";
import { Containers } from "./Container&Composition/Container.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <div className="text-center w-screen ">
        {/* <HigherOrderComponent3 /> */}
        <Containers /> 
      </div>
    </React.StrictMode>
);
