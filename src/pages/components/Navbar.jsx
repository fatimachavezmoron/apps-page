import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" >Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink to='/' className="nav-link" >Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='/about' className="nav-link" >About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='/weather' className="nav-link" >WeatherApp</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='/login' className="nav-link" >Login</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}
