import { useEffect, useState } from "react"

const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const App=()=>{
    const [drinksData,setDrinksData]=useState([])
    const [searchTerm,setSearchTerm]=useState("")
    const [loading,setLoading]=useState(false)
   
    // const fetchUrl = async (apiUrl) => {
    //     const response = await fetch(apiUrl);
    //     const { drinks } = await response.json();
    //     setDrinksData(drinks);
    //     // console.log(drinks);
    //   };
      
    const fetchUrl = async (apiUrl) => {
        setLoading(true)
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    const data = await response.json();
    const drinks = data.drinks;
    setDrinksData(drinks);
    setLoading(false)
  } catch (error) {
    console.error('Error fetching data:', error);
    setLoading(false)

  }
}
    useEffect(()=> {
       const searchUrl=`${url}${searchTerm}`;
        fetchUrl(searchUrl);
    },[searchTerm])

    return <div>
        <form>
            <input 
            type="text"
            name="search"
            id="search"
            placeholder="for searching"
            value={searchTerm} 
            onChange={(e)=>setSearchTerm(e.target.value)}></input>
        </form>
        {loading && <h3>hi</h3> }
{
       !loading && <ul className="cocktail-data"> 
            {
                drinksData.map((eachdrink)=>{
                    const {idDrink,strDrink,strDrinkThumb}=eachdrink
                    return (<li key={idDrink}>
                        <div>
                            <img src={strDrinkThumb} alt={strDrink}></img>
                            </div>
                        <div className="text">
                            <h3>{strDrink}</h3>
                            </div>
                    </li>)
                })
            }
        </ul>
}
        <h1>drinks count:{drinksData.length}</h1>
    </div>
}
export default App