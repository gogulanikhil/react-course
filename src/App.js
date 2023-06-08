// import data from './Data';
// // console.log(data)
// const App=()=>{
//     return(
//         <main className="container">
            
//                 <ul className='comments-container'>
//                     { data.map((eachobj) =>{
//                             const {id,title,thumbnailUrl,url} = eachobj
//                             return <ToDisplay key={id} id={id} title={title} thumbnailUrl={thumbnailUrl} url={url}/>
//                         })
//                     }
//                 </ul>
//                 {/* <li className='comments'>
//                     <div className='comments-header'>
//                         <h3>email@gmail.com</h3>
//                         <h3>random stuff</h3>
//                     </div>
//                     <p>lorem is not available so avoid things</p>
//                 </li>
//             <h1>hello everyone</h1>
//             </ul>
//             <ul className="comments-container">
//                 <li className='comments'>
//                     <div className='comments-header'>
//                         <h3>email@gmail.com</h3>
//                         <h3>random stuff</h3>
//                     </div>
//                     <p>lorem is not available so avoid things</p>
//                 </li> */}
//         </main>
//     )
// }
// const ToDisplay=(props) => {
//     const{id,url,thumbnailUrl,title}=props
//   return  <li key={id} className='comments'>
//                              <div className='comments-header'>
//                                     <h1>{id}</h1>
//                                     <h3>{title}</h3>
//                                     <img src={thumbnailUrl} alt='something'></img>
//                                     <a href='hi' className='button'>{url}</a>
//                                 </div>
//                                 <p>some random stuff</p>
//                             </li>
// }   
// export default App