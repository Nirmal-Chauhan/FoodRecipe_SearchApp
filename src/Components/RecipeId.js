// import React from 'react'
import Navbar from './Navbar'
import TrandingSliderSlider from './TrandingSlider'
import { useParams } from 'react-router-dom'
import React ,{ useState,useEffect } from 'react'

const RecipeId = () => {
    // console.log(useParams())
    // console.log("hello")
    const {idMeal} = useParams();
    const [active,setActive]=useState("ingredients")
    
 const[values,setValues]=useState([]);
    useEffect(()=> {
const fetchData=async()=> {
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    const data=await api.json();
    // console.log(data.meals);
    setValues(data.meals[0]);
    console.log(data);
    
} 
fetchData();
 },[idMeal])

  return (
      <> <Navbar/>
    <div style={{width:"90%",margin:"auto",textAlign:"center" ,marginTop:"3rem"}}>
        <h2>{values.strMeal}</h2>
        <div style={{display:"flex"}}>
        <div  className="img"style={{width:"30%"}}>
            <img src={values.strMealThumb} alt="" style={{width:"300px"}}/>
        </div>
<div className='content' style={{width:"90%"}}>
    <button className='btn' onClick={()=>{setActive("ingredients")}} >Ingredients</button>
    <button className='btn' onClick={()=>{setActive("instructions")}}>Instructions</button>


{
active==="ingredients"?<div>
<h3>{values.strIngredient1}-{values.strMeasure1}</h3>
<h3>{values.strIngredient2}-{values.strMeasure2}</h3>
<h3>{values.strIngredient3}-{values.strMeasure3}</h3>
<h3>{values.strIngredient4}-{values.strMeasure4}</h3>
<h3>{values.strIngredient5}-{values.strMeasure5}</h3>
<h3>{values.strIngredient6}-{values.strMeasure6}</h3>
</div>
:
<div style={{textAlignLast:"start", marginLeft:"1.5rem"}}>
    <p >{values.strInstructions }</p>
</div>

}



</div>

        </div>
        
    </div>
    <TrandingSliderSlider/>
    </>
  )
}

export default RecipeId