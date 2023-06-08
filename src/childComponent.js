import SubChildComponent from "./subChild"

const Childcomponent =(props)=>{

    return <div>
        <h1>childcomponent</h1>
        <SubChildComponent userDetails={props.userDetails}/>
    </div>


}
export default Childcomponent