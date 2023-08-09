import { CartContext } from "./CartContext"
import { useReducer } from 'react';

const initialState = []


const buyReducer = (state= initialState, action = {}) => {
  switch (action.type) {
    case '[CART] add product':
      return [...state, action.payload]

    case '[CART] add quantity':
      return state.map(item => {
        const quant = item.quantity + 1
        if (item.id === action.payload)
        return {...item, quantity: quant}
        return item
      })
    case '[CART] remove quantity':
      return state.map(item => {
        const quant = item.quantity -1
        if (item.id === action.payload && item.quantity > 1)
        return {...item, quantity: quant}
        return item
      })
      break;
    case '[CART] delete Product':
      return state.filter(buy => buy.id !== action.payload)

    default:
      return state

  }
}

export const CartProvider = ({ children }) => {

  const [buyList, dispatch] = useReducer(buyReducer, initialState);

  const addProduct = (buy) => {
    buy.quantity = 1
    const action = {
      type: '[CART] add product',
      payload: buy
    }
    dispatch(action)
  }

  const addQuantity = (id) => {
    const action = {
      type: '[CART] add quantity',
      payload: id
    }
    dispatch(action)
  }

  const removeQuantity = (id) => {
    const action = {
      type: '[CART] remove quantity',
      payload: id
    }
    dispatch(action)
  }

  const deleteProduct = (id) => {
    const action = {
      type: '[CART] delete Product',
      payload: id
    }
    dispatch(action)
  }


  return (
    <CartContext.Provider value={{buyList, addProduct, addQuantity, removeQuantity, deleteProduct}}>
      {children}
    </CartContext.Provider>
  )
}
