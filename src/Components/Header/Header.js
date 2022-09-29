import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
function Header() {
  return (
    <div id='header-main'>
            <img id='logo' src={Logo} alt="" />
    </div>
  )
}

export default Header