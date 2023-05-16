import { useState } from "react"
import React,{useContext} from "react"
import { UserContext } from "./userContextProvider"
const App=()=>{
    // useContext
const [userDetails,setuserDetails]=useState({
    firstName:"nikhil",
    lastName:"gogula",
    email:"gognikh@123"
})

return <div>
    <h1>useContext</h1>
    <ChildComponent userDetails={userDetails}/>
   </div>
}
const ChildComponent=(props)=>{
    console.log(props.userDetails)
    return <div>
        <h1>childcomponent</h1>
        <SubChildComponent userDetails={props.userDetails}/>
    </div>
}
const SubChildComponent=()=>{
    const data=useContext(UserContext)
    console.log(data)
    const {firstName,lastName,email}= data
    return <div>
        <h1>subchild component</h1>
        <div>
            fname:{firstName}
            lname:{lastName}
            gmail:{email}
        </div>

    </div>
}
export default App