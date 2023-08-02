import {  NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
    <div className="navContainer">
    <img className="logo" src={'https://www.meme-arsenal.com/memes/2035815f36f8c34cd29aa650354f3275.jpg'}/>
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
            <NavLink to='/about' className="nav-link" >About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/weather' className="nav-link" >WeatherApp</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/login' className="nav-link" >User</NavLink>
          </li>
        </ul>
      </div>
    </nav>
</div>
    </>
  )
}
