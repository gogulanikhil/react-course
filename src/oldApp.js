// calling objects from the array of objects
let downloadspicare=
 [{ title:"From variable",
img:"https://media.istockphoto.com/id/1434054606/photo/traveler-backpacker-girl-is-watching-hot-air-balloons-and-the-fairy-chimneys-at-cappadocia.jpg?b=1&s=170667a&w=0&k=20&c=9eQP1EMSpMweCwGcc4uU6MV2y4CjnH2C82S7BYypIHk=",
description:"say something on the pic"},

{title:"From variable pic2",
img:"https://th.bing.com/th/id/OIP.rG5Cgq-9lqNpXBBz6nV7dgHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
description:"say something on the second pic",
}]

// individual objects
// let downloadPic={
// title:"From variable",
// img:"https://media.istockphoto.com/id/1434054606/photo/traveler-backpacker-girl-is-watching-hot-air-balloons-and-the-fairy-chimneys-at-cappadocia.jpg?b=1&s=170667a&w=0&k=20&c=9eQP1EMSpMweCwGcc4uU6MV2y4CjnH2C82S7BYypIHk=",
// description:"say something on the pic",
// }
// let downloadPic2={
//   title:"From variable pic2",
// img:"https://th.bing.com/th/id/OIP.rG5Cgq-9lqNpXBBz6nV7dgHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
// description:"say something on the second pic",

// }
// let title="From variable"
// let img="https://media.istockphoto.com/id/1434054606/photo/traveler-backpacker-girl-is-watching-hot-air-balloons-and-the-fairy-chimneys-at-cappadocia.jpg?b=1&s=170667a&w=0&k=20&c=9eQP1EMSpMweCwGcc4uU6MV2y4CjnH2C82S7BYypIHk="
// let description="say something on the pic"
function App() {
//  let tempArray=[<h1>blue</h1>,<h2>black</h2>,<h3>red</h3>];
//  let newtemparray=downloadspicare.map((eachobj)=>{
//   return(
//     <article>
//       <h1>{eachobj.title}</h1>
//       <img src={eachobj.img} alt={eachobj.title}></img>
//       <p>{eachobj.description}</p>
//     </article>
//   ) 
//  })
 
  return(
    
    // fragements
    <>
    {/* {tempArray}
    {newtemparray} */}
    {/* to not call multiple times we use a loop like for each */}
    {/* one way by calling individually*/}
    {/* {
      downloadspicare.map(book => <h2>{book.title}</h2>)}
      {
      downloadspicare.map(book1 => <img src={book1.img} alt={book1.title}/>)
    } */}
    {/* second way by calling the components directly by using loop */}
    {
downloadspicare.map((eachobj,index)=>{
  const{title,img,description} = eachobj;
 return (<Movie title={title} img={img} description={description}/>)
  // return (<Movie title={eachobj.title} img={eachobj.img} description={eachobj.description}/>)
}
    )}
    {/* <Test /> */}
    {/* <Movie firstName="emma" lastName="watson"/> */}
    {/* calling individually with different objects */}
    {/* <Movie title={downloadPic.title} img={downloadPic.img} description={downloadPic.description}/>
    <Movie title={downloadPic2.title} img={downloadPic2.img} description={downloadPic2.description}/> */}
    {/* we are calling this multiple times */}
    {/* <Movie title={downloadspicare[0].title} img={ downloadspicare[0].img} description={downloadspicare[0].description}/>
      <Movie title={downloadspicare[1].title} img={downloadspicare[1].img} description={downloadspicare[1].description}/> */}
    </>
  )
  }
  // const Test = () =>{
  //   // return(<h3 style={{color:"red",fontSize:"20px"}}>
  //   // to reuse we use inline 
  //     const styles={
  //       heading:{
  //         // color:"red",
  //         fontSize:"20px"
  //       },
  //       byeheading:{
  //         color:"green",
  //         fontSize:"30px"
  //       }
  //     };
  //   return(<h3 style={styles.heading}>
  //   hello
  //   <span style={styles.byeheading}> bye</span>
  //   </h3>
  //   )
  // }


  // by props
  const Movie=({img,title,description})=>{
  // const Movie=(props)=>{
  
    // const{img,title,description}=props
    // console.log(props)
// by using destructrization
return(
  <>
  <img src={img} alt="alternate"></img>
  <h1>{title}</h1>
  <p>{description}</p>
  </>
)
//by using normal props way
    // return(
    //   <article className="each-movie">
    //     <img src={props.img} 
    //     alt="movie show"/>
    //     <h1>{props.title}</h1>
    //     <h3>{props.description}</h3>
    //     <p>some random  things to display about the picture in description</p>
    //   </article>
      
    // )
  }
  // calling by function
 
  // function getData(firstname,lastname){
  //   console.log(firstname)
  //   console.log(lastname)
  // }
  // getData("emma","watson");
// another way of calling function
function getData(userObj){
  // instead of writing seperately we are creating userobj by destructuring
  const {firstName,lastName} =userObj;
 
   // variable
  // const firstName=userObj.firstName
  // const lastName=userObj.lastName


  // console.log(userObj.firstName)
  // console.log(userObj.lastName)
  console.log(firstName)
  console.log(lastName)

}
// object
getData({
  firstName:"nikhil",
  lastName:"gogula"
})

  // const increament = () => {
  //   console.log("something")
  //   return "some"
  // }

  // const display = ()  => {
  //     console.log(`retuned value  ${increament()}`)
  // }

  // return (
  //   <>
  //  <h3 onClick={display} style={{color:"red",fontSize:"20px"}}>
  //   react js
  //   <span style={{color:"blue",fontSize:"20px"}}> hii</span>
  //  </h3>
  //  <Some1 />
  //  </>
  // );
// function Some() {
//   return (
//     <>something</>
//   )
// }

// const Some1 = () => {
  
  // const data = {
  //   name: "rajasekhar",
  //   surname: "k"
  //   }

//     function increamentValue(val) {
//       console.log(val)
//       // return val;
//     }

//   return (
//     <button onClick={function() {increamentValue(4)}}>click</button>
//   )
// }

export default App;
