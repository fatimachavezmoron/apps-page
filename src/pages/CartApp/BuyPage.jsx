import { Card } from './Card';
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { CartContext } from '../context/CartContext';
import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { NavLink } from "react-router-dom"  


export const BuyPage = () => {
  
  const { products } = useContext( ProductsContext )

  const { buyList, addProduct, deleteProduct} = useContext(CartContext)

  const handleAdd = (compra) => {
    addProduct(compra)
  }
  const handleRemove = (id) => {
    deleteProduct(id)
  }

  return (
    <>
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg ">
      <h1 style={{paddingTop:'20px', paddingRight:'30px'}}>
      CartApp
      </h1>
    <NavLink to='/eshop' className="navbar-brand nav-link" href="#">Cart</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
      <h1 style={{textAlign:'center', margin:'20px 0'}}>Buy our Products:</h1>
      <hr/>
      {products.map(product => (
        <>
        <div  key={product.id} >
        <Card
        imagen={product.image}
        titulo={product.title}
        descripcion={product.description}
        precio={product.price}
        handleAdd = {() => handleAdd(product)}
        handleRemove = {() => handleRemove(product.id)}
        >
        </Card>
        </div>
        </>
      ))}
    </>
  )
}
