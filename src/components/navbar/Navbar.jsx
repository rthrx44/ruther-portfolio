import React from 'react'
import './Navbar.css'
import Darktheme from '../darktheme/Darktheme'

function Navbar() {
  return (
    <nav className='navbar_con container section'>
      <div className='logo'>RD</div>
      <ul className='nav_links-con'>
        <li className='nav_links'>Home</li>
        <li className='nav_links'>About</li>
        <li className='nav_links'>Projects</li>
        <li className='nav_links'>Contact</li>
        <Darktheme/>
      </ul>  
    </nav>
  )
}

export default Navbar