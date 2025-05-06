import React, { useState } from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cartItems } = useCart(); 
  const [showPaymentOptions, setShowPaymentOptions] = useState(null); 

  const handleToPayClick = (index) => {
    setShowPaymentOptions((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen py-10 px-5 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-200 py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold text-red-600">${item.price}</span>
                <button
                  onClick={() => handleToPayClick(index)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  To Pay
                </button>
              </div>
              {showPaymentOptions === index && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Options</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600 cursor-pointer hover:text-blue-600">
                      PayPal
                    </li>
                    <li className="text-gray-600 cursor-pointer hover:text-blue-600">
                      Credit Card
                    </li>
                    <li className="text-gray-600 cursor-pointer hover:text-blue-600">
                      American Express
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;