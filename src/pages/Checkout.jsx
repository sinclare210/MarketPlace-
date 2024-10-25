import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { PaystackButton } from 'react-paystack';

 

const Checkout = () => {
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  const pub = "pk_test_9132ffe26eebfe402f4211b91750a5250eada20d"; // Your Paystack public key

  // State for shipping details
  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    address: '',
    country: '',
    email: '', // Email field for user
  });

  // Handle input change for shipping details
  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const { fullName, address, country, email } = shippingDetails;

  // Calculate total in the smallest currency unit (e.g., cents)
  const amountToCharge = Math.round(total * 100); // Ensure this is an integer value
  console.log(email)

  

  
  
    // you can call this function anything
    const handlePaystackSuccessAction = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
    };

    // you can call this function anything
    const handlePaystackCloseAction = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }

     const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: total * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_9132ffe26eebfe402f4211b91750a5250eada20d',
  };

    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Cart Summary Table */}
      <div className="mb-8 border-b pb-6">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 font-medium">Item</th>
              <th className="py-2 font-medium">Price</th>
              <th className="py-2 font-medium">Quantity</th>
              <th className="py-2 font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-2">{item.title}</td>
                <td className="py-2">${item.price.toFixed(2)}</td>
                <td className="py-2 text-center">{item.amount}</td>
                <td className="py-2">${(item.price * item.amount).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t">
              <td className="py-2 font-semibold">Total Items</td>
              <td colSpan="2"></td>
              <td className="py-2 font-semibold text-right">{itemAmount}</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">Total Cost</td>
              <td colSpan="2"></td>
              <td className="py-2 font-semibold text-right">${total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Shipping Details Section */}
      <div className="mb-8 border-b pb-6">
        <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
        <form className="space-y-4">
          <input 
            type="text" 
            name="fullName"
            value={shippingDetails.fullName}
            onChange={handleShippingChange}
            placeholder="Full Name" 
            className="w-full border p-2 rounded-lg" 
          />
          <input 
            type="text" 
            name="address"
            value={shippingDetails.address}
            onChange={handleShippingChange}
            placeholder="Address" 
            className="w-full border p-2 rounded-lg" 
          />
          <input 
            type="text" 
            name="country"
            value={shippingDetails.country}
            onChange={handleShippingChange}
            placeholder="Country" 
            className="w-full border p-2 rounded-lg" 
          />
          <input 
            type="email" 
            name="email" // Email input
            value={shippingDetails.email}
            onChange={handleShippingChange}
            placeholder="Email" 
            className="w-full border p-2 rounded-lg" 
          />
        </form>
      </div>

      {/* Submit Order Button */}
      <div className="flex justify-between items-center">
        <button onClick={clearCart} className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg">
          Clear Cart
        </button>
        <PaystackButton className="bg-blue-600 text-white py-2 px-6 rounded-lg" {...componentProps} />
      </div>
    </div>
  );
};

export default Checkout;

//   import React from 'react';
 
//   import { PaystackButton } from 'react-paystack';
 
  
//   const config = {
//     reference: (new Date()).getTime().toString(),
//     email: "user@example.com",
//     amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
//     publicKey: 'pk_test_9132ffe26eebfe402f4211b91750a5250eada20d',
//   };
  
//   function Checkout() {
//     // you can call this function anything
//     const handlePaystackSuccessAction = (reference) => {
//       // Implementation for whatever you want to do with reference and after success call.
//       console.log(reference);
//     };

//     // you can call this function anything
//     const handlePaystackCloseAction = () => {
//       // implementation for  whatever you want to do when the Paystack dialog closed.
//       console.log('closed')
//     }

//     const componentProps = {
//         ...config,
//         text: 'Paystack Button Implementation',
//         onSuccess: (reference) => handlePaystackSuccessAction(reference),
//         onClose: handlePaystackCloseAction,
//     };

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src="" className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//         <PaystackButton {...componentProps} />
//       </div>
//     );
//   }
  
//   export default Checkout;
