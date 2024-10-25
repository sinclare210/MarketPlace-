import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  const [productData, setProductData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the product data when the component mounts
    fetch('https://fakestoreapi.com/products/7')
      .then((res) => res.json())
      .then((data) => {
        setProductData({
          title: data.title,
          price: data.price,
          description: data.description,
          image: data.image,
          category: data.category,
        });
      })
      .catch((error) => console.error('Error fetching product:', error));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://fakestoreapi.com/products/7', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMessage('Product updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating product:', error);
        setMessage('Failed to update product.');
      });
  };

  return (
    <div className='p-10 pt-28'>
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard - Update Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={productData.title}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Price:</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Description:</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Image URL:</label>
          <input
            type="text"
            name="image"
            value={productData.image}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Category:</label>
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600">
          Update Product
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
    </div>
  );
}

export default AdminDashboard;
