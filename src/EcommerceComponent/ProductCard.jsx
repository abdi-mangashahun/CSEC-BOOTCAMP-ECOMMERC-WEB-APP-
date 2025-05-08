

import React from "react";
import { Link } from "react-router-dom"; 

const ProductCard = ({ product, addedToCart, handleAddToCart }) => {
  const stock = product.stock ?? 100; 

  return (
    <div className="bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    
      <Link to={`/product-details/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white">{product.name}</h2>
        <p className="text-white text-sm mt-1">{product.description}</p>
        <p className="text-red-500 font-bold mt-2">${product.price.toFixed(2)}</p>

        <p
          className={`text-sm mt-1 ${
            stock <= 5 ? "text-red-500" : "text-green-600"
          }`}
        >
          {stock <= 5 ? `Only ${stock} left in stock!` : "In Stock"}
        </p>

        <button
          onClick={() => handleAddToCart(product)}
          disabled={stock === 0}
          className={`mt-4 w-30 py-1 px-1 text-white rounded-md transition duration-200 ${
            addedToCart[product.id]
              ? "bg-green-600"
              : stock === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {addedToCart[product.id]
            ? "Added "
            : stock === 0
            ? "Out of Stock"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
