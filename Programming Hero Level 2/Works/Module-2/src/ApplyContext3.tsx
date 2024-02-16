import { useContext } from "react";
import { themeProvider } from "./useContextExample3";


const ApplyContext3 = () => {
    const {dark, setDark} = useContext(themeProvider)
    return (
        <div>
            <h2 className={`${dark ? 'bg-black text-white' : 'bg-white text-black'}`}>Hello world</h2>
            <button onClick={()=>setDark(!dark)} className="btn btn-neutral">Click Me</button>
        </div>
    )
}

export default ApplyContext3 ;