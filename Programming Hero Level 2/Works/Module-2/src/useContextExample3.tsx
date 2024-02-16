import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";


// --- type declaration
type TChildren = {
    children : ReactNode
}
// --- type declaration
type TThemeValue = {
    dark : boolean ;
    setDark : Dispatch<SetStateAction<boolean>>
}

export const themeProvider = createContext<TThemeValue | undefined>(undefined) ; 


const UseContext3 = ({children} : TChildren) => {
    const [dark, setDark] = useState(false) ; 
    const values : TThemeValue = {
        dark, 
        setDark
    }

    return (
        <themeProvider.Provider value={values} >{children}</themeProvider.Provider>
    )
}

export default UseContext3 ; 