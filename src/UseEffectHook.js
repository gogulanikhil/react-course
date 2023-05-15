import { useEffect, useState } from "react"



const Usehook=()=>{
    const [count,setCount]=useState(0)
    // const [toggle,setToggle]=useState("toggle")
    const [width,setWidth]=useState(window.innerWidth)
   useEffect(()=>{
    const resizeHandler=window.addEventListener("resize",()=>{
        setWidth(window.innerWidth)
    })
   console.log("useeffect",count);
   return()=>{
    window.removeEventListener("resize",resizeHandler)
   }
   })
    return <div>
    <h1>hello</h1>
    <h1>{width}</h1>
    {/* <h1 onClick={()=>setToggle(!toggle)}>{toggle ? "open" : "close"}</h1> */}
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>+</button>
    </div> 
}
export default Usehook