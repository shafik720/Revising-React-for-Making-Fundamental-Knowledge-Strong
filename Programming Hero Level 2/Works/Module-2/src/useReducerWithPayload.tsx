import { useReducer, useState } from "react";

const UseReducerWithPayload = () => {
  // using object inside usestate
  type TUserProfile = {
    name: string;
    age: number;
    profession: string;
  };
  const userProfile: TUserProfile = {
    name: "Anonymouse",
    age: 21,
    profession: "toto",
  };
  const [user, setUser] = useState(userProfile);

  //--- using reducer
  const initialState: TUserProfile = {
    name: "Rasel",
    age: 28,
    profession: "programmer",
  };
  const reducerFunction = (currentState: TUserProfile, action) => {
    switch (action.type) {
      case "name":
        return { ...currentState, name: action.payload };

    case "age" : 
    return {...currentState, age : action.payload}

      default:
        return currentState;
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputElement
  ) => {
    const value = e.target.value;
    const targetName = e.target.name;
    setUser({ ...user, [targetName]: value });
  };

  return (
    <div className="text-center w-screen ">
      {/* <h2 className="text-red-700 text-4xl ">Name : {user.name}</h2> */}
      <h2 className="text-red-700 text-4xl ">Name : {state.name}</h2>
      {/* <h2 className="text-black-700 text-4xl ">Age : {user.age}</h2> */}
      <h2 className="text-black-700 text-4xl ">Age : {state.age}</h2>
      <h2 className="text-black-700 text-4xl ">
        {/* Profession : {user.profession} */}
        Profession : {state.profession}
      </h2>
      <form className="my-5" onSubmit={handleSubmit}>
        <input
          onChange={(e) => dispatch({type : e.target.name || 'name', payload : e.target.value})}
          className="border-2"
          type="text"
          name="name"
          id=""
        />
        <input
          onChange={(e) => dispatch({type : e.target.name, payload : e.target.value})}
          className="border-2 ms-3"
          type="number"
          name="age"
          id=""
        />
        <button className="btn-sm btn ms-3 btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseReducerWithPayload;
