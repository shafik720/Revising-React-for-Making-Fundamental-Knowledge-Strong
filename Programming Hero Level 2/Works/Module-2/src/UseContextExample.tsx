import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

type TThemeValues = {
    dark : boolean ;
    setDark : Dispatch<SetStateAction<boolean>>
}

type TChildren = {
    children : ReactNode ; 
}

export const themeProvider = createContext<TThemeValues | undefined>(undefined)

const UseContextExample = ({children} : TChildren) => {
    const [dark, setDark] = useState(false) ; 
    const values = {
        dark,
        setDark
    }
    
    return <themeProvider.Provider value={values}>{children}</themeProvider.Provider>
}
export default UseContextExample