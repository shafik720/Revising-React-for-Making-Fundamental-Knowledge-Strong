import { useReducer } from "react";

const initialState = {
  name: "Rasel",
  age: 30,
};

const reducerFunction = (currentState : typeof initialState, action) => {
  switch (action.type) {
    case "name":
      return { ...currentState, name: action.payload };

    case "age":
      return { ...currentState, age: action.payload };
  }
};

const UseReducerWithPayload2 = () => {
    const [profile, dispatch] = useReducer(reducerFunction, initialState) ; 
};
