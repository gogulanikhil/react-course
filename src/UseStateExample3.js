import { useState } from "react"

const App = () => {

    // const tempList = [
    //     {
    //         text: "hiei",
    //         id: "01"
    //     },
    //     {
    //         text: "hello",
    //         id: "02"
    //     }
    // ]

    const [list, setList] = useState([])

    const [message, setmessage] = useState({
        text: "",
        id: ""
    })
    const changeMessage = (e) => {
        setmessage({
            ...message,
            text: e.target.value,
        })
    }
    
    const [editingItem,setEditingItem]=useState({
        id:"",
        isEditing:false
    })
 

    const changeEditState=(id)=>{
     console.log(id)
        setEditingItem({
            ...editingItem,
            id:id,
            isEditing:true
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let newTodo = {
            text: message.text,
            id: new Date().getTime().toString()
        }
        setList([...list, newTodo])
        setmessage({
            text: "",
            id: ""
        })
    }
    const handledelete = (id) => {
        let newTodos = list.filter((eachItem) => {
            return eachItem.id !== id;
        })
        setList(newTodos)
    }
    return <div className="div">
        <form>
            <input type="text"
                name="message"
                id="message"
                value={message.text}
                onChange={changeMessage}
                placeholder="enter random name">
            </input>
            {
                editingItem.isEditing ? (<button onClick={handleSubmit} type="submit">
                    c 
                    </button>
                    ):(
                        <button onClick={handleSubmit} type="submit">
                            add
                            </button>
                    )
            }
        </form>
        <hr />{
            list.length === 0 &&
            <h4>there is no data</h4>
        }
        <ul>
            {
                list.map((eachobj) => {
                    const { text, id } = eachobj
                    return <li key={id}>
                        <span>{text}
                        </span>
                        <button onClick={() => changeEditState(id)}>edit</button>
                        <button onClick={handledelete(id)}>delete</button>
                    </li>
                }
                )}
        </ul>
    </div>
}
export default App