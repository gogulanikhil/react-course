import { useState } from "react"


//array of objects
const arr = [{}, {}]
console.log(arr);
// component
const App = () => {

    // function component(jsx)
    const Func = () => {
        return <h1>function</h1>
    }
    //method// arrow function actions to be performed
    const funct = () => {
        return 414
    }

    //object
    const profile = {
        firstName: 'nikhil',
        lastName: 'gogula'
    }

    // const [data,setData]=useState(profile)

    return <div>
        <h1>hello my first name is  {profile.firstName}</h1>
        {/* <button>{changeFirstName}</button> */}
        {/* {func} */}
        {<Func></Func>}
        {funct()}
        <h1>hello my lastName is {profile.lastName} </h1>
    </div>
}
export default App