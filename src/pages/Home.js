 import { useEffect ,useState ,memo,useCallback} from "react";
import './Pages.css';
import SearchBarDebounce from "./Search";
import logo from '../assets/logo.jpg'
import Read from '../assets/Read.png'
 

 function Home (){

  const [data , setData]= useState(null)
  const [loading , setLoading] =useState(true)
  const [selectCatogary , setSelectedCatogry] =useState('technology')
  const catogeries =[
    {name:'Technology', value:'technology'},
    {name:'Business', value:'business'},
    {name:'Entertainment', value:'entertainment'},
    {name:"Health", value:'health'},
    {name:"Science", value:'science'},
    {name:"Sports", value:'sports'},
    
  ]

  useEffect(()=>{
const fetchData = async ()=>{
  setLoading(true)
 try {const responce = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${selectCatogary}&apiKey=0465a35ab3e441bab8157f5c63ed6d82`)
  if(!responce.ok){
    throw new Error("No data available")
  }
  const result = await responce.json()

  setData(result)
  setLoading(false)
console.log(result)   }

 catch (error){
  console.log('error')
}
finally{
  setLoading(false)
}

};

fetchData()
  },[selectCatogary])
  

  const HandleClick =useCallback(category=>setSelectedCatogry(category),[])
  if(loading){
    return (<h1 >loading...</h1>)
   }
return(
  <div style={{margin:"10px 20px"}} >
    <SearchBarDebounce data={data}/>
        <div className="cat-btn">
          {catogeries.map((catogary)=>(  
            <button className="btn-btn"
             key={catogary.value}
            onClick={ ()=>HandleClick(catogary.value)}>
              {catogary.name}
            </button>
           ))}
        </div>
        <section>
    <div className="news-grid">
       {data?.articles?.map((Item,index) =>(
        <div key={index} className="News">
         <a href={Item.url}> {!Item.urlToImage ? (<img src={logo} alt="item"
          className="Imgr" />) :(<img src={Item.urlToImage} 
          alt="Item.title"className="Imgr" />)} </a>
          <h3 style={{margin:'4px'}}>{Item.title}</h3>
          <p style={{textAlign:"justify", margin:"20px 10px"}}>{Item.description}</p>
          <a href={Item.url}
          target="_blank"  
          rel="noopener noreferrer" 
           
          ><img src={Read}
          alt="Ite" className="read-more-icon"  /> </a>

          <div style={{position:"absolute",top:"3px"}}> Date:{Item.publishedAt}</div>

        </div> 
        ))}

    </div> 
    </section>
  </div>

)
 }

 export default memo(Home);