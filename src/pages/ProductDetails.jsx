import React, { useContext } from 'react'
//import useparams

//import cart contxt
import { CartContext } from '../contexts/CartContext';

//import product context
import { ProductContext } from '../contexts/ProductProvider'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  // get the product id
  const {id} = useParams()
  console.log(id)
  
  const {products} = useContext(ProductContext)
  console.log(products)
  const {addToCart} = useContext(CartContext)

  const product = products.find(item =>{
    return item.id === parseInt(id);
  })
//if product not found
  if(!product) {
    return <section className='h-screen flex justify-center items-center'>Loading ...</section>
  }
//destructure
const {title, price,description ,image} = product;
  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        {/* image and text */}
        <div className='flex flex-col lg:flex-row items-center'>
           {/* image */}
        <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
          <img src={image} alt="" className='max-w-[200px] lg:max-w-sm'/>
        </div>
        {/* text */}
        <div className='flex-1 text-center lg:text-left'><h1 className='text-[26px] font-medium mb-2 mx-auto max-w-[450px] lg:mx-0'>{title}</h1>
        <div className='text-xl text-red-500 font-medium mb-6'>$ {price}</div>
        <p className='mb-8'>{description}</p>
        <button className='bg-primary py-4 px-8 text-white ' onClick={() => addToCart(product, product.id)}>Add to Cart</button>
        </div>
        </div>
       
      </div>
    </section>
  )
}

export default ProductDetails