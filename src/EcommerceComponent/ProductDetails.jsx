import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 text-sm mt-2">{product.description}</p>
          <p className="text-xl font-bold text-red-600 mt-4">${product.price}</p>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Testimonials</h2>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600">"Amazing product! Highly recommend." - John</li>
              <li className="text-gray-600">"Great value for the price." - Sarah</li>
              <li className="text-gray-600">"Exceeded my expectations!" - Mike</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;