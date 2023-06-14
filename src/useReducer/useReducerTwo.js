import React, { useEffect, useReducer, useState } from "react";
const App = () => {
  const reducer = (state, action) => {
    if (action.type === "Userupdate") {
      return {
        ...state,
        userData: action.payload,
      };
    }
    if (action.type === "Loading") {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    if (action.type === "Delete") {
      const newUsers = state.userData.filter(
        (eachUser) => eachUser.id !== action.payload
      );
      return {
        ...state,
        userData: newUsers,
      };
    }
    if (action.type === "Onclickedit") {
      return {
        ...state,
        isEdititng: action.payload,
      };
    }
    if (action.type === "UPDATEDUSER") {
      const updatedUsers = state.userData.map((eachUser) => {
        if (eachUser.id === action.payload.id) {
          return {
            id: action.payload.id,
            name: action.payload.name,
            username: action.payload.username,
            email: action.payload.email,
          };
        } else {
          return eachUser;
        }
      });
      // console.log(updatedUsers);
      return {
        ...state,
        userData: updatedUsers,
      };
    }
    return state;
  };
  // console.log(reducer);

  const fetchUserUrl = async (URL) => {
    dispatch({ type: "Loading", payload: true });
    try {
      const response = await fetch(URL);
      const data = await response.json();
      dispatch({ type: "Userupdate", payload: data });
      dispatch({ type: "Loading", payload: false });
      // console.log(data)
    } catch (error) {}
  };
  // console.log(fetchUserUrl);

  useEffect(() => {
    fetchUserUrl("https://jsonplaceholder.typicode.com/users");
  }, []);
  const initialState = {
    userData: [],
    isLoading: false,
    isEdititng: { status: false, id: "", name: "", email: "", username: "" },
    // isError:
  };
  // console.log(initialState);

  const [state, dispatch] = useReducer(reducer, initialState);
  if (state.isLoading) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
  const handleSubmit = (id) => {
    dispatch({ type: "Delete", payload: id });
  };
  const UpdateData = (id, name, username, email) => {
    dispatch({ type: "UPDATEDUSER", payload: { id, name, email, username } });
  };

  //    console.log([state,dispatch])

  return (
    <div>
      <h1>useReducerTwo</h1>

      <h2>users information</h2>
      {state.isEdititng?.status && (
        <EditFormContainer
          id={state.isEdititng.id}
          editName={state.isEdititng.name}
          editEmail={state.isEdititng.email}
          editUsername={state.isEdititng.username}
          UpdateData={UpdateData}
        />
      )}
      {state.userData.map((eachUser) => {
        // console.log(eachUser)
        const { id, name, username, email } = eachUser;
        return (
          <div key={id} style={{ background: "lightgrey" }}>
            <h1>id:{id}</h1>
            <h2>name:{name}</h2>
            <h2>username:{username}</h2>
            <h1>email:{email}</h1>
            <button
              style={{ color: "red", background: "yellow" }}
              onClick={() =>
                dispatch({
                  type: "Onclickedit",
                  payload: {
                    status: true,
                    id: id,
                    name: name,
                    email: email,
                    username: username,
                  },
                })
              }
            >
              edit
            </button>
            <button
              style={{ color: "yellow", background: "red" }}
              onClick={() => {
                handleSubmit(id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
const EditFormContainer = ({
  id,
  editName,
  editEmail,
  editUsername,
  UpdateData,
}) => {
  const [name, setName] = useState(editName || "");
  const [email, setEmail] = useState(editEmail || "");
  const [userName, setUserName] = useState(editUsername || "");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        NAME:
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        EMAIL:
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        USERNAME:
        <input
          type="text"
          name="username"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <button onClick={() => UpdateData(id, name, userName, email)}>
          update data
        </button>
      </form>
    </div>
  );
};
export default App;
