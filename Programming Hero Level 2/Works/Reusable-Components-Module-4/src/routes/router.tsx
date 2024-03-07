import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Children } from "react";


export const router = createBrowserRouter([
    {
        path : '/',
        // index : true ,
        element : <App /> ,
        children : [
            {
                path : 'about',
                element : <h2>About Here</h2>
            },
            {
                path : 'contact',
                element : <h2>Contact us here </h2>
            }
        ]
    }
])