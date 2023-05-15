import { useEffect, useState } from "react"

const url="http://jsonplaceholder.typicode.com/users"

const App=()=>{
    const [userData,setUserData]=useState([]);
    const [loading,setLoading]=useState(false)
    const [isError,setIsError]=useState({status:false,msg:""})
    const fetchUserData =async (apiUrl)=>{
        setLoading(false)
        setIsError({status:false,msg:""})
       try { 
        const response=await fetch(apiUrl)
        const data=await response.json()
        setUserData(data)
        setLoading(false)
        setIsError({status:false,msg:""})
        if(response.status===404){
            throw new Error("data not found")
        }
       }
        catch(error){
        setLoading(false)
        setIsError({status:true,msg:error.msg || "url error"})
        }
    }
    useEffect(()=>{
        fetchUserData(url)
    },[])
    if(loading){
        return<div>loading</div>
    }
    if(isError?.status){
        return <div>error</div>
    }
return <div>
    <h1>hello</h1>
    <ul>
        {
          userData.map((eachuser)=>{
            const {id,name,email}=eachuser
            return    <li>
            <div>Name:{name}</div>
            <div>Email:{email}</div>
            <div>Id:{id}</div>
        </li>
          }  )
        }
    </ul>
    </div>
}
export default App