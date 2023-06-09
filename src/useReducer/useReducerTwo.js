// import { useEffect, useReducer } from "react"

import { useEffect, useReducer } from "react"

// const reducer=(state,action)=>{
//     if(action.type === "updateusers"){
//         return{
//             ...state,
//             userData:action.payload,
//         }
//     }
//     return state
// }
// const App=()=>{
//     const fetchUserData=async(URL)=>{
//         dispatch({type:"LOADING",payload:true})
//         dispatch({type:"ERROR",payload:{status:false,msg:""}})
//         try {
//         const response=await fetch(URL)
//         const data=await response.json()
// // to store the data of  response we need to call the dispatch
//         dispatch({type:"updateusers",payload:data})
//         dispatch({type:"LOADING",payload:false})
//         dispatch({type:"ERROR",payload:{status:false,msg:""}})
//         console.log(data);

//         } catch (error) {
//             dispatch({type:"LOADING",payload:false})
//             dispatch({type:"ERROR",payload:{status:true,msg:error.message}})
//             // console.log(error);
//         }
//     }
//     useEffect(()=>{
//         fetchUserData('https://jsonplaceholder.typicode.com/users')
//     },[])
//     // console.log(useEffect);
//     const initialState={
//         userData:[
//         ],
//         isLoading:false,
//         isError:{status:false,msg:""}
//     }
// //to update intitial state we need to use dispatch
//     const[state,dispatch]=useReducer(reducer,initialState)
// return (
//     <div>
//         <h1>useReducerTwo</h1>
//         <h2>users information</h2>
//         {
//         state.userData.map((eachUser)=>{
//             const {id,name,username,email} =eachUser
//             return(
//                 <div key={id}>
//                     <h3>id:{id}</h3>
//                     <h3>name:{name}</h3>
//                     <h3>username:{username}</h3>
//                     <h3>email:{email}</h3>
//                 </div>
//             )
//         })
//         }
//     </div>
// )
// }
// export default App
const App=()=>{


    const reducer=(state,action)=>{
        if(action.type === "Userupdate"){
            return {
                ...state,
                userData:action.payload
            }
        }
    }
    // console.log(reducer); 

   const fetchUserUrl=async(URL)=>{
    try {
        const response=await fetch(URL)
        const data=await response.json()
        dispatch({type:"Userupdate",payload:data})
        // console.log(data)
    } catch (error) {
        
    }
     
    }
    // console.log(fetchUserUrl);

    useEffect(()=>{
        fetchUserUrl("https://jsonplaceholder.typicode.com/users")
    },[])
    const initialState={
        userData:[]
    }
    // console.log(initialState);

   const [state,dispatch]=useReducer(reducer,initialState)
   
//    console.log([state,dispatch])
   
   return <>
    <h1>useReducerTwo</h1>
    
    <h2>users information</h2>{
        state.userData.map((eachUser)=>{
            console.log(eachUser)
            const {id,name,username,email}=eachUser
            return <div>
                <h1>id:{id}</h1>
                <h2>name:{name}</h2>
                <h2>username:{username}</h2>
                <h1>email:{email}</h1>

            </div>

    })
}    
    </>

}
export default App