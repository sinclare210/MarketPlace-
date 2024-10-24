import React, { useContext, useEffect, useState } from 'react'
//import sidebar context
import { SidebarContext } from '../contexts/SidebarContext'
//import cart contex
import { CartContext } from '../contexts/CartContext'
//impport icons
import {BsBag} from "react-icons/bs"
import { Link } from 'react-router-dom'
const Header = () => {
  //header state
  const [isActive, setIsactive] = useState(false)
  const {isOpen,setIsOpen} = useContext(SidebarContext)
  const {itemAmount} = useContext(CartContext);
  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () =>{
      window.scrollY > 60 ? setIsactive(true): setIsactive(false)
    })
  })
  return (
    <header className={`${isActive? "bg-white py-4 shadow-md": "bg-none py-6"} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full '>
      <Link to={"/"}>
      <div>
        <img src='' alt="" />
      </div>
        
      </Link>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <BsBag className='text-2xl '/>
        <div className='bg-red-500 absolute -right-2 -bottom-2 text-white rounded-full flex justify-center items-center h-[18px] w-[18px] text-[12px]'>{itemAmount}</div>
      </div>
      </div>
    </header>
  )
}

export default Header