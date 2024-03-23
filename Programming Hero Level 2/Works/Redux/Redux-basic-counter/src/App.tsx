import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Redux/features/Counter/counterSlice";

function App() {
  const [count, setCount] = useState(0);

  const counter = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  if (counter >= 5) {
    let result = Math.floor(counter / 5);
    console.log(Array(result).fill(1));
  }
  return (
    <>
      <div className="my-5 flex justify-center items-center gap-4">
        <button
          onClick={() => dispatch(decrement())}
          className="border border-4 px-5 py-2 rounded-md bg-slate-700 text-white "
        >
          Decrement
        </button>
        <h2 className="text-4xl">{counter}</h2>
        <button
          onClick={() => dispatch(increment())}
          className="border border-4 px-5 py-2 rounded-md bg-purple-900 text-white"
        >
          Increment
        </button>
      </div>
      <div className="border-4 p-5">
        {counter >= 5 &&
          Array(Math.floor(counter / 5))
            .fill(1)
            .map((item) => (
              <button className="border border-4 w-16 h-16 bg-slate-800 mx-4 "></button>
            ))}
      </div>
    </>
  );
}

export default App;
