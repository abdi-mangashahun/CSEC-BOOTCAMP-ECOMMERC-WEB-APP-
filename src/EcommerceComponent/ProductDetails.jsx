

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
  
    fetch("/EccomerecData/Product.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.find((item) => item.id === parseInt(id));
        setProduct(selectedProduct);
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) {
    return <p className="text-center text-gray-600">Loading product details...</p>;
  }

  return (
    <div className="min-h-screen py-10 px-5 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
     
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-contain"
        />

        <div className="p-6">
     
          <h1 className="text-4xl font-bold font-montaga text-gray-800">{product.name}</h1>

        
          <p className="text-gray-600 text-base mt-2">{product.description}</p>

          {product.category && (
            <p className="text-gray-600 text-lg mt-4">
              <strong>Category:</strong> {product.category}
            </p>
          )}

          {/* Price */}
          {product.price && (
            <p className="text-xl font-bold text-red-600 mt-4">${product.price}</p>
          )}

         
          {product.stock !== undefined && (
            <p className="text-lg mt-4">
              <strong>Stock Status:</strong> {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
          )}

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Testimonials</h2>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600">"Amazing product! Highly recommend." - Abdi</li>
              <li className="text-gray-600">"Great value for the price." - Naol</li>
              <li className="text-gray-600">"Exceeded my expectations!" - Kirus</li>
            </ul>
          </div>
        </div>
      </div>

     
      <div className="flex items-center justify-center text-center rounded-xl p-1">
        <a href="/">
          <Button>Back</Button>
        </a>
      </div>
    </div>
  );
};

export default ProductDetails;
