import React, { createContext, useState } from 'react'

//create context
export const CartContext = createContext()

const CartProvider = ({children}) => {
  //cart state
  const [cart, setCart] = useState([]);
  const addToCart = (products,id) => {
    const newItem = {...products, amount: 1}
   // check if item is already there
   const cartItem = cart.find((item) => {
    return item.id === id;
   });
   //if item is in the cart
   if(cartItem){
    const newCart = [...cart].map(item =>{
      if(item.id === id){
          return {...item, amount: item.amount + 1}
      }else{
        return item;
      }
    });
    setCart(newCart);
   }else{
    setCart([...cart, newItem])
   }
  }

  return (
    <CartContext.Provider value={{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider