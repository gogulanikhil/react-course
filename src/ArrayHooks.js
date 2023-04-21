import { useState } from "react"
const App = () => {
    // array of objects
    const initilalArr = [
        {
            id: "one",
            firstName: "Nikhil",
            lastName: "gogula"
        },
        // second object
        {
            id: "two",
            firstName: "Akhil",
            lastName: "G"
        }
    ]

    const [data, setData] = useState(initilalArr)
    //  console.log(data);

    const handleDelete = (comingId) => {
        // console.log(comingId)
        const filterData = data.filter((eachObj) => {
            return eachObj.id !== comingId
        })
        setData(filterData)
        // console.log(filterData);
    }
    //  const delete= () 
    return <div>
        {

            data.map((eachObj, index) => {
                const { firstName, lastName, id } = eachObj
                return <li key={index}>
                    <div>firstName:{firstName}</div>
                    <div>lastName:{lastName}</div>
                    <button onClick={() => handleDelete(id)}>delete</button>
                </li>
            })
        }
    </div>
}
export default App