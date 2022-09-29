import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import SearchArea from './SearchArea'
function Header() {
  return (
    <div id='header-main'>
            <img id='logo' src={Logo} alt="" />
            <SearchArea/>
    </div>
  )
}

export default Header