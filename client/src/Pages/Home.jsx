import React from 'react'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Slider from '../Components/Slider'

function Home() {
  return (
    <div>
    <Announcement/>
    <Navbar/>
    <Slider/>
    </div>
  )
}

export default Home