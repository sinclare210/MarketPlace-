import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductProvider from './contexts/ProductProvider.jsx'
//product provider

createRoot(document.getElementById('root')).render(
  <ProductProvider>
     <StrictMode>
    <App />
  </StrictMode>
  </ProductProvider>
 
)
