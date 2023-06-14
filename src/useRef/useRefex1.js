import { useEffect, useRef, useState } from "react";

const App = () => {
  const [text, setText] = useState("");
const renderCount=useRef(1)

  useEffect(()=>{
    renderCount.current=renderCount.current + 1
    // console.log(renderCount);
  })
  return (
    <div>
      <input
        type="text"
        name="firstname"
        id="firstname"
        onChange={(e) => {setText(e.target.value)}}
      ></input>
      <h3>boxValue:{text}</h3>
      <h1>component renderd {renderCount.current} times</h1>
    </div>
  );
};
export default App;
