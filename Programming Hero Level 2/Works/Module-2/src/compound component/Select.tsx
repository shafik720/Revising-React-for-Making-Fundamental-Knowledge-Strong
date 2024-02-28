import { createContext, useContext, useState } from "react";

const SelectContext = createContext(undefined);

export const Select = ({ children }) => {
  const [isActive, setIsActive] = useState("");

  return (
    <SelectContext.Provider value={{ isActive, setIsActive }}>
      <select onChange={(e) => setIsActive(e.target.value)}>{children}</select>
    </SelectContext.Provider>
  );
};

const SelectOption = ({ values, children }) => {
  const { isActive, setIsActive } = useContext(SelectContext);
  const isSelected = isActive === values ; 
  return <option className='bg-red-600' value={values}>{children}</option>;
};

Select.SelectOption = SelectOption;
