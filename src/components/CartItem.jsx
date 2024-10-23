import React from 'react'
import { Link } from 'react-router-dom';
//import icons
import {IoMdClose} from "react-icons/io"

const CartItem = ({item,}) => {
  //desstructure
  const {id, title, image, price, amount} = item;
  return (
    <div className='flex'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <Link to={`/product/${id}`}>
          <img src={image} alt="" className='max-w-[80px]'/>
        </Link>
        <div className='w-full flex flex-col'>
          {/* title and remove icon */}
          <div className='flex justify-between mb-2'>
            <Link to={`/product/${title}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
              {title}
            </Link>
            {/* removeicon */}
            <div className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition'/>
            </div>
          </div>
          <div>
            {/* qty */}
            <div>

            </div>
            {/* item price */}
            <div>
              
            </div>
            {/* final price */}
            <div>
              
            </div>
          </div>
        </div>
          
        
      </div>
    </div>
  )
}

export default CartItem