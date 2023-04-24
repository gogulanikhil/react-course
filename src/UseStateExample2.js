import { useState } from "react"
const App = () => {

    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const firstName = (e) => {
        console.log(e.target.value);
        setname(e.target.value)
    }
    const emailg = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const passWord = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    const handleSubmit=(even)=>{
        even.preventDefault()
        let userObj={
            firstName:name,
            email:email,
            passWord:password
        }
        console.log(userObj)
    }

    return <div>
        <form 
        onSubmit={handleSubmit}>
            <div className="form-component">
                <input
                    type="text"
                    name="firstname"
                    value={name}
                    onChange={firstName}
                    placeholder="enter your name"
                ></input>
            </div>
            <div className="form-component">
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={emailg}
                    placeholder="enter your email"></input>
            </div>
            <div className="form-component">
                <input type="password" name="password" value={password}
                    onChange={passWord}
                    placeholder="enter your password"></input>
            </div>
            <div className="form-component">
                <button>
                    submit
                </button>
            </div>
        </form>
    </div>
}
export default App