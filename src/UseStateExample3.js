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
    const [editingItem, setEditingItem] = useState({
        id: "",
        isEditing: false
    })
    const changeMessage = (e) => {
        console.log(e)
        setmessage({
            ...message,
            text: e.target.value,
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
        console.log(list);
    }
    const handleEdit=(e)=>{
        e.preventDefault()
        console.log("previous",list)
        let newTodos=list.map((eachItem) =>{
            if(eachItem.id===editingItem.id){
                return {
                    text:message.text,
                    id:editingItem.id
                }
            }else{
                return eachItem
            }
        })
        setList(newTodos)
        console.log("new",newTodos)
        setmessage({
            text:"",
            id:""
        })
        setEditingItem({
            id:"",
            isEditing:false
        })
    }
    const handledelete = (id) => {
        let newTodos = list.filter((eachItem) => {
            return eachItem.id !== id;
        })
        setList(newTodos)
    }
    const changeEditState = (id) => {
        setEditingItem({
            ...editingItem,
            id: id,
            isEditing: true
        })
        let editableItem = list.find((eachItem) => eachItem.id === id);
        setmessage({
            ...message,
            text: editableItem.text,
            id: editableItem.id
        })
    }
    return <div className="div">
        <form>
            <input
                type="text"
                name="message"
                id="message"
                placeholder="enter random name"
                value={message.text}
                onChange={changeMessage}
            />
            {
                editingItem.isEditing ? (
                    <button onClick={handleEdit} type="submit">
                        edit
                    </button>
                ) : (
                    <button onClick={handleSubmit} type="submit">
                        add
                    </button>
                )
            }
        </form>
        <hr />
        {
            list.length === 0 &&
            <h4>there is no data</h4>
        }
        <ul>
            {
                list.map((eachobj) => {
                    const { text, id } = eachobj
                    return <li key={id}>
                        {text}
                        <button onClick={() => changeEditState(id)} >edit</button>
                        <button onClick={() => handledelete(id)}>delete</button>
                    </li>
                }
                )}
        </ul>
    </div>
}
export default App