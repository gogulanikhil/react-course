import React, { useReducer } from "react";

//to not crash the app we need to return the state which is a object
const reducer = (state, action) => {
  if (action.type === "DELETE") {
    const newPersons = state.data.filter((eachPerson) => {
      return eachPerson.id !== action.payload;
    });
    console.log(newPersons);
    // ... is a state operator
    return {
      ...state,
      data: newPersons,
      length: state.length - 1,
    }
  }
  return state
};
const App = () => {
  const initialState = {
    data: [
      { id: 123, firstName: "nikhil", email: "abc@" },
      { id: 345, firstName: "akhil", email: "def@" },
    ],
    length: 2,
  };

  // useReducer(reducer,initialState)
  // console.log(useReducer(reducer,initialState));

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEdit = (id) => {
    dispatch({
      type: "EDIT",
      payload: id,
    });
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };
  return (
    <div>
      <h1>current length:{state.length}</h1>
      {state.data.map((eachItem) => {
        const { id, firstName, email } = eachItem;
        return (
          <div key={id}>
            <h3>id:{id}</h3>
            <h3>firstname:{firstName}</h3>
            <h3>email:{email}</h3>
            <button onClick={() => handleDelete(id)}>delete</button>
            <button onClick={() => handleEdit(id)}>edit</button>
          </div>
        );
      })}
    </div>
  );
};
export default App;
