import { useState } from "react"

const App = () => {

    const [hideData, sethideData] = useState(false)
    const handleChange = () => {
        sethideData(!hideData)
    }
    return <div className="hi">
        {/* terminal operator ? */}
        <button onClick={handleChange}>{hideData ? "hide" : "show"}</button>
        {/* {
            hideData && (
                <h1>soem reandu syfhioah</h1>
            )
        } */}
        {
            hideData ? (
                <h1>soem reandu syfhioah</h1>
            ) : ( 
            <h3>data is hidden</h3>)
        }
    </div>
}
export default App