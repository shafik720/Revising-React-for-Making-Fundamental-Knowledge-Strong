import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type TThemeValue = {
    dark : boolean,
    setDark : Dispatch<SetStateAction<boolean>>
}

type TChildren = {
    children : ReactNode
}

export const ThemeContext = createContext<TThemeValue | undefined>(undefined) ; 

const UseContextExample2 = ({children} : TChildren) => {
    const [dark, setDark] = useState(false) ; 
    const values : TThemeValue = {
        dark, 
        setDark 
    }
    return <ThemeContext.Provider value={values} > {children} </ThemeContext.Provider>
}

export default UseContextExample2 ; 