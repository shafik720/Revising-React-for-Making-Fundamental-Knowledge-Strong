import { Select } from "./Select";
import { Select2 } from "./Select2";
import { Select3 } from "./Select3";

export const Test = () => {
  return (
    <div>
        {/* <Select>
            <Select.SelectOption value='option1' >Option 1</Select.SelectOption>
            <Select.SelectOption value='option2' >Option 2</Select.SelectOption>
            <Select.SelectOption value='option3' >Option 3</Select.SelectOption>
            <Select.SelectOption value='option4' >Option 4</Select.SelectOption>
        </Select> */}
        {/* <Select2>
          <Select2.option  value='option1'>Option1</Select2.option>
          <Select2.option  value='option2'>Option2</Select2.option>
          <Select2.option  value='option3'>Option3</Select2.option>
          <Select2.option  value='option4'>Option4</Select2.option>
        </Select2> */}
        <Select3>
          <Select3.option value='option1'>Option1</Select3.option>
          <Select3.option value='option2'>Option2</Select3.option>
          <Select3.option value='option3'>Option3</Select3.option>
          <Select3.option value='option4'>Option4</Select3.option>
        </Select3>
    </div>
  )
};
