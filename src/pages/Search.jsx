 import { useState,useEffect,useMemo } from "react";

 function SearchBar({data}){
  const articles = useMemo(()=>data?.articles ?? [],[data])
 const [query,setQuery] =useState("");
 const [filterData,setFilterData] =useState([]);
 const [showDropDown,setShowDropDown]=useState(false)

useEffect(()=>{
  if(query.trim()===""){
    setFilterData([])
    setShowDropDown(false)
    return;
  }
  const Timeout=setTimeout(()=>{
    const filter =articles?.filter((article)=>article?.title?.toLowerCase().includes(query?.toLowerCase()));
    console.log(filter)
    setFilterData(filter)
    setShowDropDown(true)  
    },900)
    return ()=> clearTimeout(Timeout)
 
},[query,articles])

return(
<div style={{ position: "relative",  }}>
<input
id="Search "
type="text"
value ={query}
onChange ={(e)=>setQuery(e.target.value)}
placeholder="Search news..."
onFocus={()=>setShowDropDown(true)}
onBlur={()=>setShowDropDown(false)}
style={{position:"absolute", right:'1px',width:"44%",height:'auto',fontWeight:'bold',fontSize:"16px"}}
/>
{showDropDown&&(
  <ul
  style={{backgroundColor:'white',
    listStyle:"none",
    marginTop:'40px',
    padding:"0",
    right:'9px',
    width:'44%',
    position:'absolute',
    maxHeight:'250px',
    overflowY:'auto',
    zIndex:1000,
    border:'solid 1px blue',
    borderRadius:'10px'
  }}
  onMouseDown={(e) => e.preventDefault()}
  >
   {filterData?.map((item,index)=>{
    return(
      <li key={index}
      style={{
        padding: "10px",
        cursor: "pointer",
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
      }}
      
      >
      {item?.urlToImage&&(
        <img
        src={item.urlToImage}
        alt={item.title}
        style={{height:"50px",width:'50px',borderRadius:"10px"}}
        />
       
      )}
       <span>{item?.title}</span>
      </li>
    )
   })}
  </ul>
)}
</div>
)
 }
 export default SearchBar;