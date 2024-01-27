import { useContext } from "react";
import { themeProvider } from "./UseContextExample";


const Test = () =>{
    const {dark, setDark} = useContext(themeProvider) ; 
    return (
        <div>
            <h2 className={`${dark && 'text-red-500'}  `}>Testing</h2>
            <button onClick={() => setDark(!dark)}>Click</button>
        </div>
    )
}


export default Test ; 