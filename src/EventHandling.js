const App=()=>{
//    const clickHandle=(e)=>{
// console.log(e)
//    }
   function clickHandle(e,firstname){
    console.log("from function",e,firstname)
   }
//returns html with javascript
    return(
        <main className="container">
        <button className="button" 
        onClick={(e)=>clickHandle(e,"nikhil")}
        // onClick={function(e){
        //     return clickHandle(e,"nikhil")
        // }
        // }
        >
            click me
            </button>
        </main>
    )
}
export default App