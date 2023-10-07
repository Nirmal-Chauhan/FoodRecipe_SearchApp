import React from 'react'
import Home from './Components/Home'
import RecipeId from './Components/RecipeId'
import SearchElements from './Components/SearchElements'
import "./App.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Category from './Components/Category'
const App = () => {
  return (
    <>
    <Router>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/:idMeal"element={<RecipeId/>} />
<Route path="/category/:name" element={<Category/>} />
<Route path="/search/:searchElement" element={<SearchElements/>} />
</Routes>
 </Router>
    
    
    </>
  )
}

export default App