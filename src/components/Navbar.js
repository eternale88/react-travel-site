import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//rcfe - creates basic functional component
function Navbar() {

  const [click, setClick] = useState(false)
  // hook toggle click
  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false)
  //using fragments instead of divs (<>) to avoid error nav children
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Travel <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onclick={closeMobileMenu}>
                Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onclick={closeMobileMenu}>
                Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onclick={closeMobileMenu}>
                Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-links-mobile" onclick={closeMobileMenu}>
                Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
