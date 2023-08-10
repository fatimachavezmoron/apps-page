import { useContext } from "react"
import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { NavLink } from "react-router-dom"
import { CartContext } from '../context/CartContext';

export const CartApp = () => {
  const {buyList} = useContext(CartContext)
  return (
    <div className="contCartApp">
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg ">
      <NavLink to='/eshop' style={{paddingRight:'18px'}} className="nav-link active" href="#">Cart</NavLink>
      <button className="navbar-toggler shadow-none border-0 hamburgerIcon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to='/buypage' className="nav-link" aria-current="page" href="#">Buy</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/cartpage' className="nav-link" aria-current="page" href="#">CartPage</NavLink>
          </li>
        </ul>
        <NavLink to='/cartpage' className='iconCart'>
        <Badge badgeContent={buyList.length} color="primary">
          <ShoppingCart />
        </Badge>
        </NavLink>
      </div>
    </nav>
  </div>
  <div className="contBuyProductsBtn">
    <NavLink to='/buypage'>
    <button className="classBtn"> 
      Click here to buy our Products
    </button>
    </NavLink>
  </div>
    </div>
  )
}
