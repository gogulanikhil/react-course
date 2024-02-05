import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "usersupdate") {
    return {
      ...state,
      userData: action.payload,
    };
  }
  return state;
};

const App = () => {
  const fetchUserData = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch({ type: "usersupdate", payload: data });
    console.log(data);
  };
  useEffect(() => {
    fetchUserData("https://jsonplaceholder.typicode.com/users");
  }, []);
  // console.log(useEffect);
  const initialState = {
    userData: [],
    isLoading: false,
    isError: { status: false, msg: "" },
  };
  //to update intitial state we need to use dispatch
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>useReducerTwo</h1>
      <h2>users information</h2>
      {state.userData.map((eachItem) => {
        const { id, name, username, email } = eachItem;
        return (
          <div key={id}>
            <h1>id:{id}</h1>
            <h1>name:{name}</h1>
            <h1>username:{username}</h1>
            <h1>email:{email}</h1>
          </div>
        );
      })}
    </div>
  );
};
export default App;
