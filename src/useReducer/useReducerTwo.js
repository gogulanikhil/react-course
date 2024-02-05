import { useEffect, useReducer } from "react"

const reducer=(state,action)=>{
    return state
}
const App=()=>{
    const fetchUserData=async(URL)=>{
        const response=await fetch(URL)
        const data=await response.json()
        console.log(data);
    }
    useEffect(()=>{
        fetchUserData('https://jsonplaceholder.typicode.com/users')
    },[])
    // console.log(useEffect);
    const initialState={
        userData:[
        ],
        isLoading:false,
        isError:{status:false,msg:""}
    }
//to update intitial state we need to use dispatch
    const[state,dispatch]=useReducer(reducer,initialState)
return (
    <div>
        <h1>useReducerTwo</h1>
        <h2>users information</h2>
    </div>
  );
};
export default App;
