import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/NavBar.css'

function NavBar() {
  return (
    <div>
        <nav className='navbar'>
        <div className='navbar-brand'>
            <Link to="/">Movie App</Link>
            <div className='navbar-links'>
                <Link className='nav-link' to='/'>Home</Link>
                <div>
                <Link className='nav-link' to='/favorites'>Favourites</Link>

                </div>
                
            </div>
        
        </div>

        </nav>
    </div>
  )
}

export default NavBar