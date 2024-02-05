import { useReducer } from "react";

const UseReducerWithPayload2 = () => {
  const initialState = {
    name: "Rasel",
    age: 30,
  };

  const reducerFunction = (currentState: typeof initialState, action) => {
    switch (action.type) {
      case "name":
        return { ...currentState, name: action.payload };

      case "age":
        return { ...currentState, age: action.payload };
      default:
        return currentState;
    }
  };
  const [profile, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <div>
      <h2>Hello world</h2>
      <h3>Name : {profile.name} </h3>
      <h3>Name : {profile.age} </h3>
      <form action="">
        <input
          onChange={(e) => dispatch({ type: e.target.name, payload : e.target.value })}
          type="text"
          name="name"
          className="border-2 mx-3 px-3"
          placeholder="name"
          id=""
        />
      </form>
    </div>
  );
};

export default UseReducerWithPayload2;
