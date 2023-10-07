import React, { useEffect, useState } from 'react'
import Slider from "react-slick"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
const PopularSlider = () => {

    // console.log("hel")

 const[values,setValues]=useState([])
    useEffect(()=>{
const fetchData=async()=>{
    const api=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
    const data=await api.json();
    // console.log(data.meals);

    setValues(data.meals)
}
fetchData()

    },[])

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 500,
        cssEase: "linear"
      };



  return(<>
   <div 
   style={{
height:"40vh",
width:"90%",
// backgroundColor:"yellow",
marginTop:"1.5rem",
margin:"auto"
 }}
   >
        <Slider {...settings} 
        style={{margin:"1rem"}}
        >
 {       values.map((value)=>{

return(
<Link to={`/${value.idMeal}`} key={value.idMeal}> 
<div className='slider'>
    <img src={value.strMealThumb
}  style={{width:"185px",height:"180px"}}/>
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

export default PopularSlider