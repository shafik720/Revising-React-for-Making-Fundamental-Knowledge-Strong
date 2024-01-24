import { useReducer } from "react";

const initialState = {
  name: "Rasel",
  email: "rasel@gmail.com",
};

const reducerFunction = (currentState: typeof initialState, action) => {
  switch (action.type) {
    case "name":
      return { ...currentState, name: action.payload };

    case "email":
      return { ...currentState, email: action.payload };

    default:
      break;
  }
};

const ReducerForm = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  console.log(state);
  return (
    <div>
      <h2>Reducer form</h2>
      <form action="">
        <input
          type="text"
          name="name"
          id=""
          className="border-2 m-3"
          placeholder="Your Name"
          onChange={(e) => dispatch({type : e.target.name, payload : e.target.value})}
        />
        <input
          type="text"
          name="name"
          id=""
          className="border-2 m-3"
          placeholder="Your Email"
        />
        <button className="btn btn-neutral btn-sm">Submit</button>
      </form>
    </div>
  );
};

export default ReducerForm;
