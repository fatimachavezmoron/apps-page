import {  NavLink } from "react-router-dom"
import { useState } from "react"

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <>
    <div className="navContainer">
    <div className="logo">✪</div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container">
      <button
            className={`navbar-toggler btnOpen shadow-none border-0 ${
              isOpen ? "collapsed" : ""
            }`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div         className={`sidebar offcanvas offcanvas-start ${
              isOpen ? "show" : ""
            }`}
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header text-white border-bottom">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">✪</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
              <NavLink onClick={closeMenu} to='/' className="nav-link" >My gallery</NavLink>
              </li>
              <li className="nav-item">
              <NavLink onClick={closeMenu} to='/movies' className="nav-link" >Movies</NavLink>
              </li>
              <li className="nav-item dropdown">
              <NavLink onClick={closeMenu} to='/weather' className="nav-link" >WeatherApp</NavLink>
              </li>
              <li className="nav-item dropdown">
              <NavLink onClick={closeMenu} to='/eshop' className="nav-link" >Eshop</NavLink>
              </li>
              <li className="nav-item dropdown">
              <NavLink onClick={closeMenu} to='/user' className="nav-link" >User</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </div>
    </>
  )
}
