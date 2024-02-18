import { useEffect, useRef } from "react";
import ForwardRefExample from "./Components/forwardRef";

const UseRef = () => {
  const myRef = useRef();

  useEffect(() => {
    myRef?.current?.focus();
  }, []);

  return (
    <div>
      <h2>Hello World</h2>
      <form action="">
        <ForwardRefExample ref={myRef} classProps={"border border-green-500"} />
      </form>
    </div>
  );
};

export default UseRef;
