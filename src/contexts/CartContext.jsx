import React, { createContext, useEffect, useState } from 'react'

//create context
export const CartContext = createContext()

const CartProvider = ({children}) => {
  //cart state
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0)
  // toatal price state
  const [total, setTotal] = useState(0);

  //total the goods
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0)
    setTotal(total)
  })

  //update the amount
  useEffect(() => {
    if(cart){
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      },0)
      setItemAmount(amount)
    }
  },[cart])
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

  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) =>{
      return item.id !== id;
    })
    setCart(newCart)
  }

  //clear cart
  const clearCart = () => {
    setCart([]);
  }

  //increase amount
  const increaseAmount = (id) => {
    const item = cart.find(item => {
      return item.id === id
    });
    addToCart(item, id)
  }

  //decrease amount
  const decreaseAmount = (id) => {
    const item = cart.find(item => item.id === id);
    if(item){
      const newCart = cart.map(items => {
        if(items.id === id){
          return{...items, amount: item.amount - 1}
        }else{
          return newItem
        }
      })
      setCart(newCart)
    }
      if(item.amount < 2){
          removeFromCart(id);
      }
   
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseAmount,decreaseAmount,itemAmount, total}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider