import React, { createContext, useContext } from 'react';

// Create the UserContext
const UserContext = createContext();

// Define a parent component that provides the UserContext values
const UserContextProvider = ({ children }) => {
  const userData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
  }
  console.log(userData)

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  )
}

// Use the UserContext in a child component
const SubChildComponent = () => {
  const data = useContext(UserContext);
  console.log(data)

  const { firstName, lastName, email } = data;

  return (
    <div>
      firstName: {firstName}
      <br />
      lastName: {lastName}
      <br />
      email: {email}
    </div>
  );
};

// Parent component that uses the UserContextProvider
const ParentComponent = () => {
    return (
    <UserContextProvider>
      <SubChildComponent />
    </UserContextProvider>
  );
};
export default ParentComponent

// Render the ParentComponent
// ReactDOM.render(<ParentComponent />,document.getElementById('root'));
