import { useContext } from "react";
import { ThemeContext } from "./useContextExample2";

const ApplyContext2 = () => {
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <div>
      <h2 className={`${dark ? 'bg-black text-white' : 'bg-white text-red-600'}`}>UseContext Here</h2>
      <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  );
};

export default ApplyContext2;
