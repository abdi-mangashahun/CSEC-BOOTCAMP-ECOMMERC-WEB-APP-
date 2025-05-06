
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext"; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const [addedToCart, setAddedToCart] = useState({}); 
  const { addToCart } = useCart(); 

  useEffect(() => {
    fetch("/EccomerecData/Product.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); 
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.id]: true, 
    }));

   
    setTimeout(() => {
      setAddedToCart((prevState) => ({
        ...prevState,
        [product.id]: false, 
      }));
    }, 2000);
  };

  return (
    <div
      className="min-h-screen py-10 px-5 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/p.jpg')" }}
    >
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Best Deals For You
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Link to={`/product-details/${product.id}`}>
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <div className="mt-4 flex flex-col items-center">
             
                {addedToCart[product.id] && (
                  <p className="text-green-600 text-sm mb-2">Added to Cart</p>
                )}
                <div className="flex items-center justify-between w-full">
                  <span className="text-xl font-bold text-red-600">${product.price}</span>
                  <button
                    onClick={() => handleAddToCart(product)} 
                    className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                  >
                    <FaShoppingCart className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;