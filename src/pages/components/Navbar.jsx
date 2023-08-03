import {  NavLink } from "react-router-dom"
// import logo from '../../assets/logo1.jpeg'

export const Navbar = () => {
  return (
    <>
    <div className="navContainer">
    <div className="logo">✪</div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink to='/' className="nav-link" >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/movies' className="nav-link" >Movies</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/weather' className="nav-link" >WeatherApp</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/user' className="nav-link" >User</NavLink>
          </li>
        </ul>
      </div>
    </nav>
</div>
    </>
  )
}
