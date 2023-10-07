import React from 'react'
import Navbar from './Navbar'
import PopularSlider from './PopularSlider'
import TrandingSlider from './TrandingSlider'
const Home = () => {
  return (
    <>
    <div className='main'>
    <Navbar/>
    <PopularSlider/>
    </div>
   
    
    <TrandingSlider/>
    </>
  )
}

export default Home