import React from "react"
const init={
    firstName:'nikhil',
    lastName:'gogula',
    email:'gngo'
}

export const UserContext =React.createContext()

export const UserContextProvider=({children})=>{
    return <UserContext.Provider value={init}>
        {children}
        </UserContext.Provider>
} 