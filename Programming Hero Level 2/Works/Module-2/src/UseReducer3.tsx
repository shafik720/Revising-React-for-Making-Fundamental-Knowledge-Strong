import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };

    case "decrement":
      return { count: currentState.count - 1 };

    default :
    return currentState ; 
  }
};

const UseReducer3 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2 className="font-semibold text-4xl">Use Reducer 2</h2>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type : 'increment'})} className="me-3 btn btn-primary my-4"  type="button">Increase</button>
      <button onClick={() => dispatch({type : 'decrement'})} className="me-3 btn btn-danger my-4"  type="button">Decrease</button>
    </div>
  );
};

export default UseReducer3;
