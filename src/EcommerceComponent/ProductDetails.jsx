
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
    <div className="min-h-screen bg-black text-white py-10 px-4 sm:px-5">
      <div className="max-w-7xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        {/* Image + Info */}
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 sm:h-[510px] object-contain rounded-t-lg md:rounded-none md:rounded-l-lg"
            />
          </div>

          {/* Info */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 space-y-4">
            <h1 className="text-2xl sm:text-4xl font-bold">{product.name}</h1>
            <p className="text-gray-400 text-sm sm:text-base">{product.description}</p>

            <div className="space-y-4">
              {product.category && (
                <p className="text-base sm:text-lg text-gray-400">
                  <strong>Category:</strong> {product.category}
                </p>
              )}
              {product.price && (
                <p className="text-xl sm:text-2xl font-bold text-red-600">
                  ${product.price}
                </p>
              )}
            </div>

            {product.stock !== undefined && (
              <p className="text-base sm:text-lg text-gray-400">
                <strong>Stock Status:</strong>{" "}
                {product.stock > 0 ? (
                  <span className="text-green-500">In Stock</span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </p>
            )}

            <div className="flex flex-col gap-3 mt-4">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full">
                Add to Cart
              </Button>
              <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full">
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-gray-900 text-gray-300 p-4 sm:p-6 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold">Product Specifications</h2>
          <ul className="space-y-3 mt-4">
            <li><strong>Brand:</strong> {product.brand || "N/A"}</li>
            <li><strong>Weight:</strong> {product.weight || "N/A"}</li>
            <li><strong>Dimensions:</strong> {product.dimensions || "N/A"}</li>
            <li><strong>Color:</strong> {product.color || "N/A"}</li>
          </ul>
        </div>

        {/* Reviews */}
        <div className="bg-gray-900 text-gray-300 p-4 sm:p-6 mt-6 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold">Customer Reviews</h2>
          <ul className="space-y-4 mt-4">
            <li>"Amazing product! Highly recommend." - Abdi</li>
            <li>"Great value for the price." - Naol</li>
            <li>"Exceeded my expectations!" - Kirus</li>
          </ul>
        </div>

        {/* Related */}
        <div className="bg-gray-900 text-gray-300 p-4 sm:p-6 mt-6 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <img src="/images/p2.jpg" alt="Related Product" className="w-full h-32 object-cover rounded-lg" />
              <h3 className="text-lg text-white mt-2">Related Product 1</h3>
              <p className="text-sm text-gray-400">$25.00</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <img src="/images/p2.jpg" alt="Related Product" className="w-full h-32 object-cover rounded-lg" />
              <h3 className="text-lg text-white mt-2">Related Product 2</h3>
              <p className="text-sm text-gray-400">$30.00</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <img src="/images/p2.jpg" alt="Related Product" className="w-full h-32 object-cover rounded-lg" />
              <h3 className="text-lg text-white mt-2">Related Product 3</h3>
              <p className="text-sm text-gray-400">$40.00</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <img src="/images/p2.jpg" alt="Related Product" className="w-full h-32 object-cover rounded-lg" />
              <h3 className="text-lg text-white mt-2">Related Product 4</h3>
              <p className="text-sm text-gray-400">$35.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="flex items-center justify-center text-center mt-8">
        <a href="/">
          <Button className="bg-gray-600 text-white hover:bg-gray-700">
            Back to Products
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProductDetails;
