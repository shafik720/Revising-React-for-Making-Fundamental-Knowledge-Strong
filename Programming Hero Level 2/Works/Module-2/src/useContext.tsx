import { ReactNode, createContext, useState } from "react";

type TThemecontextType = {
  children: ReactNode;
};

type TThemeValues = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeContext = createContext<TThemeValues | undefined>(undefined);

const UseContext = ({ children }: TThemecontextType) => {
  const [dark, setDark] = useState(false);
  const values = {
    dark,
    setDark,
  };
  return (
    <ThemeContext.Provider value={values} >{children}</ThemeContext.Provider>
  );
};


export default UseContext ; 