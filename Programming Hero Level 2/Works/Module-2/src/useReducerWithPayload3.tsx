import { useReducer } from "react";

type TUserProfile = {
  name: string;
  age: number;
};
const initialState: TUserProfile = {
  name: "rasel",
  age: 29,
};

const reducerFunction = (currentState: TUserProfile, action) => {
  switch (action.type) {
    case "name":
      return { ...currentState, name: action.payload };

    case "age":
      return { ...currentState, age: action.payload };

    default:
      return currentState;
  }
};

const UseReducerWithPayload3 = () => {
    const [state, dispatch] = useReducer(reducerFunction, initialState) ; 

    return (
        <div>
            <h2>Practicing useReducer</h2>
            <h2>Name : {state.name}</h2>
            <h2>Age : {state.age}</h2>
            <form action="">
                <input onChange={e => dispatch({type: e.target.name, payload : e.target.value})} type="text" name="name" className="border-2 mx-2 p-2 rounded-lg" placeholder="Name" id="" />
                <input onChange={e => dispatch({type: e.target.name, payload : e.target.value})} type="text" name="age" className="border-2 mx-2 p-2 rounded-lg" placeholder="Age" id="" />
            </form>
        </div>
    )
};


export default UseReducerWithPayload3 ; 