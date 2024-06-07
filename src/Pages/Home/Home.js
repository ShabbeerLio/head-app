import React from 'react'
import "./Home.css"
import Banner from '../../Components/Banner/Banner'
import HomeAbout from '../../Components/HomeAbout/HomeAbout'
// import Services from '../../Components/Services/HServices'
// import Doctors from '../../Components/Doctors/Doctors'
// import Work from '../../Components/Work/Work'
// import HomeDetail from '../../Components/HomeDetail/HomeDetail'
// import HomeContact from '../../Components/HomeContact/HomeContact'
// import Clients from '../../Components/Clients/Clients'
import News from '../../Components/News/News'
import FreeTrial from '../../Components/FreeTrial/FreeTrial'

const Home = () => {
  return (
    <div className='Home'>
      <Banner />
      <HomeAbout />
      {/* <Services /> */}
      {/* <Doctors /> */}
      {/* <Work /> */}
      {/* <HomeDetail /> */}
      {/* <Clients /> */}
      <FreeTrial/>
      {/* <HomeContact /> */}
      <News/>
    </div>
  )
}

export default Home
