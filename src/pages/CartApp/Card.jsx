import { useState } from "react"

export const Card = ({imagen, 
                      titulo, 
                      descripcion, 
                      precio, 
                      handleAdd, 
                      handleRemove, 
                      handleIncrease, 
                      handleDecrease}) => 
  {

    const [added, setAdded] = useState(false)

    const clickAdd= () => {
      handleAdd()
      setAdded(true)
    }    
    const clickRemove= () => {
      handleRemove()
      setAdded(false)
    }
  return (
    <>
    <div className="containerCardComponent">
      <div className="tarjeta">
        <img src={imagen} alt={titulo} className='tarjeta-imagen'/>
        <div className="tarjeta-contenido">
          <h3 className="tarjeta-titulo">{titulo}</h3>
          <p className="tarjeta-descripcion">{descripcion}</p>
          <p className="tarjeta-precio">€{precio}</p>
          {added 
          ? <button
          type='button'
          className="boton-quitar" 
          onClick={clickRemove}
          >Remove from cart</button>  
          : <button
          type='button'
          className="boton-agregar"
          onClick={clickAdd}        
          >Add to cart</button> 
          }
        </div>
      </div>
    </div>
    </>
  )
}
