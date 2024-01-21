import { useReducer } from "react";

const initialState = { count: 5 };
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

const UseReducer2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="text-3xl font-semibold">
      <h2>Practicing useReducer</h2>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type : 'increment'})} className="btn btn-neutral mx-4" type="button">
        Increase
      </button>
      <button onClick={() => dispatch({type : 'decrement'})} className="btn btn-warning" type="button">
        Decrease
      </button>
    </div>
  );
};

export default UseReducer2;
