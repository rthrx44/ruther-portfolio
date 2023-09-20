import React, { useState } from 'react'
import './Navbar.css'
import Darktheme from '../darktheme/Darktheme'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { RButton } from '../buttons/Buttons';
import Resume from '../assets/Resume.pdf'

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(<MenuRoundedIcon/>);

  const handletoggle = () => {
    const body = document.querySelector('body')
    if (toggleMenu) {
      setToggleMenu(false)
      body.style.overflowY = 'auto'
      setToggleIcon(<MenuRoundedIcon/>)
    } else {
      setToggleIcon(<CloseRoundedIcon/>)
      setToggleMenu(true)
      body.style.overflowY = 'hidden'
    };
  }

  const handleClick = () => {
    const mobileLinks = [document.querySelectorAll('.mobile-nav_links')]
    const body = document.querySelector('body')
    if (mobileLinks) {
      setToggleIcon(<MenuRoundedIcon/>)
      setToggleMenu(false)
      body.style.overflowY = 'auto'
    }
  }

  return (
    <>
      {toggleMenu && 
        <nav className='mobile-navbar_con'>
          <ul className='mobile-nav_links-con'>
            <li>
              <a className='mobile-nav_links' href="#about" onClick={handleClick}>About</a>
            </li>
            <li>
              <a className='mobile-nav_links' href="#projects" onClick={handleClick}>Projects</a>
            </li>
            <li>
            <a className='mobile-nav_links' href="#contact" onClick={handleClick}>Contact</a>
            </li>
            <li className='mobile-nav_line'></li>
            <Darktheme/>
            <a href={Resume} download target='_blank' rel='noreferrer' title='Download Resume'><RButton displayText='Resume'/></a>
          </ul>  
        </nav>
      }
      <header className='header container'>
        <nav className='navbar_con'>
          <ul className='nav_links-con'>
            <li>
              <a className='nav_links' href="#about">About</a>
            </li>
            <li>
              <a className='nav_links' href="#projects">Projects</a>
            </li>
            <li>
              <a className='nav_links' href="#contact">Contact</a>
            </li>
            <li className='nav_line'></li>
            <Darktheme/>
            <a href={Resume} download target='_blank' rel='noreferrer' title='Download Resume'><RButton displayText='Resume'/></a>
          </ul>  
          <button className='hamburger_menu' onClick={handletoggle}>{toggleIcon}</button>
        </nav>
      </header>
    </>
  )
}

export default Navbar