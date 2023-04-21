import { useState } from "react"


const App = () => {
    // function
    const profile = {
        firstName: "nikhil",
        lastName: "gogula"

    }
    //hooks
    const [data, setData] = useState(profile)
    const changeFirstName = () => {
        //    ...spread operatorss is ...data
        setData({
            ...data,
            firstName: "akhil",
            // lastName:"gogu"
        })

    }
    const changeLastName = () => {
        setData({
            ...data,
            lastName: "mani"
        })
    }
    // template strings
    // console.log(`my name is  ${profile.firstName} `)
    return <div>
        <h3>hello my firstName is {data.firstName}</h3>
        <button onClick={changeFirstName}>frstname</button>
        <h3>hello my lastName is {data.lastName}</h3>
        <button onClick={changeLastName}>lastname</button>
    </div>
}
export default App