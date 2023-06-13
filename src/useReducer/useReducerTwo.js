// import { useEffect, useReducer } from "react"

import { useEffect, useReducer, useState } from "react"

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
        if (action.type ==="Loading") {
         return{
            ...state,
            isLoading:action.payload
         }       
        }

        if(action.type ==="Delete"){
            const newUsers =state.userData.filter(
                (eachUser)=> eachUser.id !== action.payload)
            return{
                ...state,
                userData:newUsers
                
            }
        }
        if(action.type === "Onclickedit"){
            return {
                ...state,
                isEdititng:action.payload
            }
        }
        return state
    }
    // console.log(reducer); 

   const fetchUserUrl=async(URL)=>{
    dispatch({type:"Loading",payload:true})
    try {
        const response=await fetch(URL)
        const data=await response.json()
        dispatch({type:"Userupdate",payload:data})
        dispatch({type:"Loading",payload:false})
        // console.log(data)
    } catch (error) {
        
    }
     
    }
    // console.log(fetchUserUrl);

    useEffect(()=>{
        fetchUserUrl("https://jsonplaceholder.typicode.com/users")
    },[])
    const initialState={
        userData:[],
        isLoading:false,
        isEdititng:{status:false,id:""},
        // isError:
    }
    // console.log(initialState);
    

    const [state,dispatch]=useReducer(reducer,initialState)
    if (state.isLoading) {
        return (
            <div>
                <h1>loading...</h1>
            </div>
        )
    }
    const handleSubmit=(id)=>{
        dispatch({type:"Delete",payload:id})

    }


//    console.log([state,dispatch])
   
   return (
<div>
<h1>useReducerTwo</h1>
    
    <h2>users information</h2>
        {state.isEdititng?.status && <EditFormContainer />}
        {state.userData.map((eachUser)=>{
            // console.log(eachUser)
            const {id,name,username,email}=eachUser
            return <div key={id} style={{background:"lightgrey" }}>
                <h1>id:{id}</h1>
                <h2>name:{name}</h2>
                <h2>username:{username}</h2>
                <h1>email:{email}</h1>
                <button 
                style={{color:"red",background:"yellow"}} 
                onClick={dispatch({type:"Onclickedit",payload:{status:true,id:id,name,email,username}})}
                >edit</button>
                <button 
                style={{color:"yellow",background:"red"}} 
                onClick={()=>{handleSubmit(id)}}>delete</button>
            </div>

    })
   }
</div>
   )
}
   const EditFormContainer=(id,editTitle,editEmail,editUsername,updateaData)=>{
    const [title,setTitle]=useState(editTitle || "")
    const [email,setEmail]=useState(editEmail || "")
    const [userName,setUserName]=useState(editUsername || "")
    return (
      <div>
          <form>
            <input type="text" name="title" id="title" 
            value={title} 
            onChange={(e)=>setTitle(e.target.value)} ></input>
            <input type="email" name="email" id="email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}></input>
             <input type="text" name="username" id="username" 
            value={userName} 
            onChange={(e)=>setUserName(e.target.value)}></input>
            <button>updatedata</button>
        </form>
      </div>
    )
   }
export default App