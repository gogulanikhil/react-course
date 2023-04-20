import React, {useState} from "react";

   const App = ()=>{
    // [count]whatever we are passing default val;ue it will be stroed i the count
    // [setcount is a function] we are using for changing the default value
    const [count,setCount]=useState(0)

    const incrementCount =()=>{
        setCount(count + 1)
    }
    const decrementCount=()=>{
        setCount(count-1)
    }
    // console.log(count)
    // console.log(setCount)
    console.log(arr)
    console.log(arr[0])
    // console.log(arr[1]);
    console.log(useState(0)); 
  return  <div className="App">
    <button onClick={incrementCount}>+</button>
    <span>{count}</span>
    <button onClick={decrementCount}>-</button>
    </div>
   }
export default App