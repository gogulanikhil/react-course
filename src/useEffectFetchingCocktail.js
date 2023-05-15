import { useEffect, useState } from "react"

const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
const App=()=>{
    const [drinksData,setDrinksData]=useState([])
   
    const fetchUrl=async(apiUrl)=>{
        const reponse=await fetch(apiUrl)
        const data=await reponse.json()
        // console.log(reponse)
        console.log(data)
    }
    useEffect(()=>{
        fetchUrl(url)
    },[])
    return <div>
        <h1>drinks count:{drinksData.length}</h1>
    </div>
}
export default App