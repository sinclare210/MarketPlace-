import React, { useEffect, useState, createContext } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    // products state
    const [products, setProducts] = useState([]);

    // fetch products
    useEffect(() => {
        const fetchProducts = async () => {
            
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                
                setProducts(data);  // Update state with the fetched data
            
        };
        fetchProducts();  // Call the function
    }, []);
   

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
