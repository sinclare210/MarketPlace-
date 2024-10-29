import React, { useContext } from 'react'
//import link
import { Link } from 'react-router-dom'
//import icons
import { IoMdArrowForward } from 'react-icons/io'
import {FiTrash2} from "react-icons/fi"

//import component
import CartItem from './CartItem'

//import sidebar contxt
import { SidebarContext } from '../contexts/SidebarContext'
// import cart context
import { CartContext } from '../contexts/CartContext'
  

const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext);
  const {cart, clearCart, itemAmount, total}= useContext(CartContext)
  

  return (
    <div className={`${isOpen ? "right-0" : "-right-full"} w-full bg-white fixed top-0 h-full shadow-2xl duration-300 z-20 px-4 transition-all xl:max-w-[30vw] lg:px-[35px] md:w-[35vw]`}>
  {/* Header */}
  <div className='flex items-center justify-between py-6 border-b'>
    <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
    {/* Close Icon */}
    <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
      <IoMdArrowForward className='text-2xl' />
    </div>
  </div>
  
  {/* Cart Items */}
  <div className='flex flex-col gap-y-2 overflow-y-auto border-b overflow-x-hidden lg:h-[50vh] h-[45vh]'>
    {cart.map((item) => (
      <CartItem item={item} key={item.id} />
    ))}
  </div>

  {/* Footer: Total and Clear Cart */}
  <div className='flex flex-col gap-y-3 py-4 mt-4'>
    {/* Total and Clear Cart Container */}
    <div className='flex items-center justify-between'>
      {/* Total */}
      <div className='uppercase font-semibold text-lg'>
        <span className='mr-2'>Total: </span>${parseFloat(total).toFixed(2)}
      </div>
      {/* Clear Cart Icon */}
      <div 
        className='cursor-pointer bg-rose-500 text-white w-12 h-12 flex justify-center items-center text-xl'
        onClick={clearCart}
      >
        <FiTrash2 />
      </div>
    </div>

    {/* Checkout Button */}
    <Link 
      to='/' 
      className='bg-gray-200 text-primary flex justify-center items-center p-4 w-full font-medium'
    >
      View Cart
    </Link>
    <Link to='/checkout' onClick={handleClose}
      className='bg-primary text-white flex justify-center items-center p-4 w-full font-medium'>Checkout</Link>
  </div>
</div>

  )
}

export default Sidebar