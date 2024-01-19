import React, { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };

    case "decrement":
      return { count: currentState.count - 1 };
    default:
      return currentState;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="text-3xl font-semibold">
      <h2>Practicing Use Reducer</h2>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type : 'increment'})} className="btn btn-neutral mx-3">Increase</button>
      <button onClick={()=>dispatch({type : 'decrement'})} className="btn btn-warning">Decrease</button>
    </div>
  );
};

export default UseReducer;
