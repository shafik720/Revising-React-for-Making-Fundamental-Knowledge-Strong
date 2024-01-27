import { useContext } from "react";
import UseContext, { ThemeContext } from "./useContext";



const ApplyUseContextDiv = () => {
    const {dark, setDark} = useContext(ThemeContext) ; 
    console.log(dark);
    return (
        <div className={`bg-white ${dark && 'bg-slate-500' } `} >
            <h2>Hello</h2>
            <button onClick={() => setDark(!dark)} className="btn btn-warning">Toggle</button>
        </div>
    )
}


export default ApplyUseContextDiv ; 