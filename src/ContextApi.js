import { useState } from "react"
import React from "react"
import Childcomponent from "./childComponent"
const ParentComponent=()=>{
    // useContext
const [userDetails,setUserDetails]=useState({
    firstName:"nikhil",
    lastName:"gogula",
    email:"gognikh@123"
})
// console.log(useState)

return <div>
    <h1>useContext</h1>
    <Childcomponent userDetails={userDetails}/>
   </div>
}
// const ChildComponent=(props)=>{
//     console.log(props.userDetails)
//     return <div>
//         <h1>childcomponent</h1>
//         <SubChildComponent userDetails={props.userDetails}/>
//     </div>
// }
// {SubChildComponent}
// const SubChildComponent=()=>{
//     const data=useContext(UserContext)
//     console.log(data)
//     const {firstName,lastName,email}= data
//     return <div>
//         <h1>subchild component</h1>
//         <div>
//             fname:{firstName}
//             lname:{lastName}
//             gmail:{email}
//         </div> 
//     </div>
// }
export default ParentComponent