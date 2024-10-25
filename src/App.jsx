import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
// import pages
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

//import components
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Checkout from './pages/Checkout'
import AdminDashboard from './pages/AdminDashboard'



function App() {
  

  return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>
      <Sidebar/>
      <Footer/>
     </Router>
    </>
  )
}

export default App
