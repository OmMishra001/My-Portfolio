import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import Resume from '../Pages/Resume'


const Navbar = () => {

  return (

    <React.Fragment>
      <section>
        <div className='Navbar'>
          <p>port<span>folio</span></p>
          <div className='nav-contents'>
            <NavLink style={({ isActive }) => ({
              color: isActive ? "#f75023" : "white",
            })} to='/'><p className='Home nav-category'>Home</p></NavLink>
            <NavLink style={({ isActive }) => ({
              color: isActive ? "#f75023" : "white",
            })} to='/about'><p className='About nav-category'>About</p></NavLink>
            <NavLink style={({ isActive }) => ({
              color: isActive ? "#f75023" : "white",
            })} to='/skills'><p className='Contact nav-category'>Skills</p></NavLink>
            <NavLink style={({ isActive }) => ({
              color: isActive ? "#f75023" : "white",
            })} to='/projects'><p className='Portfolio nav-category'>Projects</p></NavLink>
            <NavLink style={({ isActive }) => ({
              color: isActive ? "#f75023" : "white",
            })} to='/contact'><p className='Contact nav-category'>Contact</p></NavLink>
            <Resume />
          </div>
        </div>

      </section>
    </React.Fragment>
  )
}

export default Navbar