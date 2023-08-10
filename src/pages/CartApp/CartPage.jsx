import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { NavLink } from 'react-router-dom';
import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"

export const CartPage = () => {

const {buyList, addQuantity, removeQuantity, deleteProduct} = useContext(CartContext)

const calcularTotal = () => {
  return buyList.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
}

const handleImp = () => {
  print()
}

  return (
      <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg ">
        <NavLink to='/eshop' className="navbar-brand nav-link" href="#">Cart</NavLink>
        <button className="navbar-toggler shadow-none border-0 hamburgerIcon" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to='/buypage' className="nav-link" aria-current="page" href="#">Buy</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/cartpage' className="nav-link active" aria-current="page" href="#">CartPage</NavLink>
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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              buyList.map(item => (
                <>
                <tr key={item.id}>
                  <th scope="row">{item.title}</th>
                  <td>{item.price}</td>
                  <td>
                    <button className='btn btn-outline-primary'
                      onClick={() => removeQuantity(item.id)}
                    >-</button>
                    <button className='btn btn-primary'>{item.quantity}</button>
                    <button className='btn btn-outline-primary'
                       onClick={() => addQuantity(item.id)}
                    >+</button>
                  </td>
                  <td>
                    <button
                      type='button'
                      className='btn btn-danger'
                      onClick= {()=> deleteProduct(item.id)}
                    > Delete
                    </button>
                  </td>
                </tr>
                </>
              ))
            }
            <th>
              <p style={{width:'320px', 
                  borderRadius:'5px', 
                  textAlign:'center', 
                  marginTop:'10px'}}>TOTAL:
              <span> ${calcularTotal()}</span>
              </p>
            </th>
          </tbody>
        </table>
        <div>
          <button className="btn btn-primary w-25"
            onClick={handleImp}
            disabled={buyList<1}
          >
            Buy
          </button>
        </div>
      </>
  )
}
