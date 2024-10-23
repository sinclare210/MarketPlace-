import React, { useContext } from 'react'
//import product
import { ProductContext } from '../contexts/ProductProvider'

const Home = () => {
  // get products from product context
  const {products} = useContext(ProductContext)
  console.log(products)
  return (
    <div>Home</div>
  )
}

export default Home