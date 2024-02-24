

export const Select = ({children}) => {
    return (
        <Select>{children}</Select>
    )
}

export const SelectOption = ({values, children}) => {
    return (
        <option value={values}>{children}</option>
    )
}

Select.SelectOption = SelectOption ; 