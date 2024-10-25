import React from 'react'

import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='bg-pink-200 h-[800px] bg-no-repeat bg-cover bg-center py-24'>
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'>
              
            </div>New trend
          </div>
          {/* title */}
          <h1 className='font-light mb-4 leading-[1.1] text-[70px]'>
            Autumn sale <br/>
          <span className='font-semibold'>Unisex</span>
          </h1>
          <Link to={"/"} className='self-start uppercase font-semibold border-b-2 border-primary'>
            discover more
          </Link>
        </div>
        {/* image */}
        <div className='hidden lg:block'>
          <img src='' alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero