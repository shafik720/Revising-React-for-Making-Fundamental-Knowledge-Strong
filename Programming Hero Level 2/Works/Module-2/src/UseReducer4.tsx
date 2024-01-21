import { useReducer } from "react";

const initialState = { count: 50 };

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };

    case "decrease":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

const UseReducer4 = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <div>
      <h2>Use Reducer 3</h2>
      <h1>{state.count}</h1>
      <button
        onClick={() => dispatch({ type: "increase" })}
        className="btn btn-neutral me-4"
        type="button"
      >
        Increase
      </button>
      <button
        onClick={() => dispatch({ type: "decrease" })}
        className="btn btn-warning me-4"
        type="button"
      >
        Decrease
      </button>
    </div>
  );
};

export default UseReducer4;
