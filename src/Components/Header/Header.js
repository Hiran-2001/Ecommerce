import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import SearchArea from './SearchArea'
import Profile from './Profile'
function Header() {
  return (
    <div id='header-main'>
            <img id='logo' src={Logo} alt="" />
            <SearchArea/>
            <Profile/>
    </div>
  )
}

export default Header