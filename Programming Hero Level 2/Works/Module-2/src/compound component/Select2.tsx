import { createContext, useContext, useState } from "react";

const SelectContext = createContext(undefined);

export const Select2 = ({ children }) => {
  const [selectValue, setSelectValue] = useState("");
  const values = { selectValue, setSelectValue };
  console.log(selectValue);
  return (
    <SelectContext.Provider value={values}>
      <select onChange={(e) => setSelectValue(e.target.value)}>
        {children}
      </select>
    </SelectContext.Provider>
  );
};

export const SelectOption = ({ children, values }) => {
  const { selectValue, setSelectValue } = useContext(SelectContext);

  return <option value={values}>{children}</option>;
};

Select2.option = SelectOption;
