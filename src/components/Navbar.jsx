import React from 'react'
import '../style/Navbar.css';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <ul>
        <li className='nav-items'><a href="#about" className="active">About</a></li>
        <li className='nav-items'><a href="#skills">Skills</a></li>
        <li className='nav-items'><a href="#experience">Experience</a></li>
         <li className='nav-items'><a href="#projects">Projects</a></li>
        <li className='nav-items'><a href="#service">Services</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar