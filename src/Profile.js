const Todisplay=({title,thumbnailUrl,url})=>{
    // using destructuring we need to extract aarrray of objects individually
    // const{title,thumbnailUrl,url}=props
    return <article className="profiles">
            <img src={thumbnailUrl} alt="random name"></img>
            <h1 className="title">{title}</h1>
            <a href={url} className="button">details
            </a>
        </article>  
}
export default Todisplay