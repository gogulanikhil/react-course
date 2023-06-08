import { useContext } from "react"
import { UserContext } from "./userContextProvider"

const SubChildComponent =({userDetails})=>{

    // return <div>
    //     <h1>SubChildComponent</h1>
    //     <div>fname:{userDetails.firstName}</div>
    //     <div>lname:{userDetails.lastName}</div>
    //     <div>email:{userDetails.email}</div>
    // </div>
    const data=useContext(UserContext)

    const {firstName,lastName,email}=data

    return <div>
        <h1>SubChildComponent</h1>
        firstName:{firstName}<br/>
        lastName:{lastName}<br/>
        email:{email}
    </div>



}
export default SubChildComponent