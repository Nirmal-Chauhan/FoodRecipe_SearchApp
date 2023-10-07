// import React from 'react'
import Navbar from './Navbar'
import TrandingSliderSlider from './TrandingSlider'
import { useParams,Link } from 'react-router-dom'
import React, { useState,useEffect } from 'react'
// import {  } from 'react-router-dom'

const SearchElements = () => {
   const {searchElement}= useParams();
    const [values,setValues]= useState([]);
    useEffect(() => {
  
        const fetchData = async () => {
          const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchElement}`)
          const data = await api.json();
      // console.log(data.meals);
          setValues(data.meals)
          // console.log(data)
          // console.log("hrll")
        }
    
        fetchData();
      }, [searchElement])
    // console.log(useParams())
  return (
    <>
    {/* <h2>Hello world!</h2> */}
     <Navbar/>
   
   <div style={{
width:"90%",
marginTop:"4rem",
margin:"auto",
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(16rem,1fr))",
 }}>

  {
values && values.map((value)=> {

    return(
  <Link to={`/${value.idMeal}`} className='link'>
<div style={{textAlign:"center"}}>
<div className='img'>
<img src={value.strMealThumb
} alt="" style={{width:"14rem"}} key={value.idMeal}/>
</div>
<h3>{value.strMeal}</h3>
</div>
</Link>
)
})
  }
 
 </div>
 <TrandingSliderSlider/>
  </>
    
  )
}

export default SearchElements