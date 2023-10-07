import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import TrandingSliderSlider from './TrandingSlider'
import { Link } from 'react-router-dom'
const Category = () => {
// console.log("Hell")
    const {name}=useParams()
    // console.log(useParams())

    const[values,setValues]=useState([]);
    useEffect(()=>{
    const fetchData=async()=>{
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
    const data=await api.json()
    console.log(data.meals)
    
    setValues(data.meals)
}
fetchData()

    },[name])

  return (
    <>
    <Navbar/>
   
     <div style={{
width:"90%",
marginTop:"4.5rem",
margin:"auto",
display:"grid",
// marginTop:"3rem",
gridTemplateColumns:"repeat(auto-fit,minmax(16rem,1fr))",

    }}>

    {
values&& values.map((value)=> {
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

export default Category