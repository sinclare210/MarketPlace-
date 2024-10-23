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
  const {cart}= useContext(CartContext)
  console.log(useContext(CartContext))
  return (
    <div className={`${isOpen ? "right-0":"-right-full" } w-full bg-white fixed top-0 h-full shadow-2xl duration-300 z-20 px-4 transition-all xl:max-w-[30vw] lg:px-[35px] md:w-[35vw]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shoping Bag(0)</div>
        {/* icons */}
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
      <div>{cart.map((item)=>{
        return <CartItem item={item} key={item.id}/>
      })}</div>
    </div>
  )
}

export default Sidebar