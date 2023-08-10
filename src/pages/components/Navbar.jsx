import {  NavLink } from "react-router-dom"
// import logo from '../../NavLinkssets/logo1.jpeg'

export const Navbar = () => {
  return (
    <>
    <div className="navContainer">
    <div className="logo">✪</div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container">
        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header text-white border-bottom">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">✪</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
              <NavLink to='/' className="nav-link" >My gallery</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to='/movies' className="nav-link" >Movies</NavLink>
              </li>
              <li className="nav-item dropdown">
              <NavLink to='/weather' className="nav-link" >WeatherApp</NavLink>
              </li>
              <li className="nav-item dropdown">
              <NavLink to='/eshop' className="nav-link" >Eshop</NavLink>
              </li>
              <li className="nav-item dropdown">
              <NavLink to='/user' className="nav-link" >User</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink to='/' className="nav-link" >My gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/movies' className="nav-link" >Movies</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/weather' className="nav-link" >WeatherApp</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/eshop' className="nav-link" >Eshop</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/user' className="nav-link" >User</NavLink>
          </li>
        </ul>
      </div>
      </nav> */}
</div>
    </>
  )
}
