
import React, { useState } from "react";
import { useCart } from "./CartContext";
import {Button} from "@/components/ui/Button"
const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [showPaymentOptions, setShowPaymentOptions] = useState(null);

  const handleToPayClick = (index) => {
    setShowPaymentOptions((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-black text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg p-4 sm:p-6 space-y-6">
          {cartItems.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-700 pb-4 gap-4">
                {/* Left: Image and Name */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                  </div>
                </div>

                {/* Right: Price and Actions */}
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <span className="text-xl font-bold text-red-400">${item.price}</span>
                  <button
                    onClick={() => handleToPayClick(index)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Payment Options */}
              {showPaymentOptions === index && (
                <div className="mt-2 bg-gray-900 shadow-xl rounded-lg p-4 text-white w-full sm:w-64">
                  <h3 className="text-lg font-semibold mb-2">Payment Options</h3>
                  <ul className="space-y-2">
                    <li className="cursor-pointer hover:text-blue-400">PayPal</li>
                    <li className="cursor-pointer hover:text-blue-400">Credit Card</li>
                    <li className="cursor-pointer hover:text-blue-400">American Express</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    <div className='text-center mt-10'>  <a href='/' ><Button >Back</Button></a></div>
    </div>
  );
};

export default Cart;
