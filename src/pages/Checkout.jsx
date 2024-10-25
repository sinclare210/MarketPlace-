import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Checkout = () => {
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

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
          <input type="text" placeholder="Full Name" className="w-full border p-2 rounded-lg" />
          <input type="text" placeholder="Address" className="w-full border p-2 rounded-lg" />
          <input type="text" placeholder="City" className="w-full border p-2 rounded-lg" />
          <input type="text" placeholder="Postal Code" className="w-full border p-2 rounded-lg" />
          <input type="text" placeholder="Country" className="w-full border p-2 rounded-lg" />
        </form>
      </div>

      {/* Payment Details Placeholder */}
      <div className="mb-8 border-b pb-6">
        <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
        <div className="space-y-4">
          <input type="text" placeholder="Card Number" className="w-full border p-2 rounded-lg" />
          <div className="flex space-x-4">
            <input type="text" placeholder="MM/YY" className="w-1/2 border p-2 rounded-lg" />
            <input type="text" placeholder="CVC" className="w-1/2 border p-2 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Submit Order Button */}
      <div className="flex justify-between items-center">
        <button onClick={clearCart} className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg">
          Clear Cart
        </button>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
