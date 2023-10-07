import React, { useEffect, useState } from 'react'
import Slider from "react-slick"
import {Link} from "react-router-dom"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TrandingSliderSlider = () => {
 const[values,setValues]=useState([])
    useEffect(()=>{
const fetchData=async()=>{
    const api=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
    const data=await api.json()
    // console.log(data.meals);
    setValues(data.meals)
}
fetchData()

    },[])

    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        pauseOnHover: true
      };



  return(<>
   <div 
   style={{
height:"25vh",
width:"99%",
// backgroundColor:"yellow",
marginTop:"1.5rem",
margin:"auto",
overflowX:"hidden"
 }}
   >
        <Slider {...settings} 
        style={{margin:"1rem"}}
        >
 {       values.map((value)=>{

return(
<Link to={`/${value.idMeal}`} key={value.idMeal}>
<div className='slider2'>
    <img src={value.strMealThumb
}  style={{width:"100px",height:"90px"}}/>
</div>
</Link>
)

})
     }     
        </Slider>
      </div>

  
   </>
  ) 
  
  
}

export default TrandingSliderSlider