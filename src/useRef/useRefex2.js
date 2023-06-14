import { useEffect, useRef, useState } from "react"

const App=()=>{
    const [text,setText]=useState("")
    const inputDom=useRef(0)

    useEffect(()=>{
        // console.log(useEffect)
        console.log(inputDom);
        // component.current=component.current+1
    })
    const focus=()=>{
        inputDom.current.focus()
    }

    return <div>
        <h1>hello</h1>
        <input 
        ref={inputDom}
        type="text"
        name="randomname"
        id="id" onChange={(e)=>{setText(e.target.value)}}></input>
        <h5>entered value:{text}</h5>
        {/* <h4>component renderd {component.current} value</h4> */}
        <button onClick={focus}>focus</button>
    </div>
}
export default App