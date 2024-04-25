import React from 'react'
import "./Home.css"
import Banner from '../../Components/Banner/Banner'
import HomeAbout from '../../Components/HomeAbout/HomeAbout'
import Services from '../../Components/Services/HServices'

const Home = () => {
  return (
    <div className='Home'>
      <Banner/>
      <HomeAbout/>
      <Services/>
    </div>
  )
}

export default Home
