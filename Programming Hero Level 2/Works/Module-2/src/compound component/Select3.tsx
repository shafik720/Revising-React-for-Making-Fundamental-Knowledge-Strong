import { createContext, useState } from "react";

const SelectContext = createContext(undefined);

export const Select3 = ({ children }) => {
    const [active, setActive] = useState('') ; 
    console.log(active);
  return (
    <SelectContext.Provider value={{active, setActive}}>
      <select onChange={(e) => setActive(e.target.value)}>{children}</select>
    </SelectContext.Provider>
  );
};

const SelectOption = ({ children, values }) => {
  return <option className="bg-green-800" value={values}>{children}</option>;
};

Select3.option = SelectOption;
