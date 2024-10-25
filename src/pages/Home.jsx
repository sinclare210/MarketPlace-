import React, { useContext } from 'react'
//import components
import Product from '../components/Product'
import Hero from '../components/Hero'

//import productcontext
import { ProductContext } from '../contexts/ProductProvider'





const Home = () => {
  // get products from product context
  const {products} = useContext(ProductContext)
  

  
  
  return (
    <div>
      <Hero/>
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {products.map(products => {
              return <Product products={products} key={products.id}/>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home