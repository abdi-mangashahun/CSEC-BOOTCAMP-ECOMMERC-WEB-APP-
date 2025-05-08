// import React, { useEffect, useState } from "react"; 
// import { useCart } from "./CartContext";
// import ProductCard from "./ProductCard"; 

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [addedToCart, setAddedToCart] = useState({});
//   const [lowStock, setLowStock] = useState(false); 
//   const { addToCart } = useCart();

//   useEffect(() => {
//     fetch("/EccomerecData/Product.json")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setProducts(data);

//         const hasLowStock = data.some((product) => product.stock <= 5);
//         setLowStock(hasLowStock);
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     setAddedToCart((prevState) => ({
//       ...prevState,
//       [product.id]: true,
//     }));

//     setTimeout(() => {
//       setAddedToCart((prevState) => ({
//         ...prevState,
//         [product.id]: false,
//       }));
//     }, 2000);
//   };

//   return (
//     <div
//       className="min-h-screen py-10 px-5 bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/p.jpg')" }}
//     >
//       <h1 className="text-3xl font-bold text-center mb-4 text-white">
//         Best Deals For You
//       </h1>


//       {lowStock && (
//         <p className="text-center text-red-600 font-semibold mb-6">
//           ⚠️ Low stock on some products!
//         </p>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
//         {products.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             addedToCart={addedToCart}
//             handleAddToCart={handleAddToCart}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;

import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import ProductCard from "./ProductCard"; // Importing the ProductCard component

const Products = () => {
  const [products, setProducts] = useState([]);
  const [addedToCart, setAddedToCart] = useState({});
  const [lowStock, setLowStock] = useState(false);
  const { addToCart } = useCart(); // Destructuring addToCart from the CartContext

  useEffect(() => {
    fetch("/EccomerecData/Product.json") // Fetching product data from JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);

        // Checking if there are any products with low stock (<= 5)
        const hasLowStock = data.some((product) => product.stock <= 5);
        setLowStock(hasLowStock);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); // Add the product to the cart
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));

    // Remove the "added to cart" notification after 2 seconds
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
      <h1 className="text-3xl font-bold text-center mb-4 text-white">
        Best Deals For You
      </h1>

      {lowStock && (
        <p className="text-center text-red-600 font-semibold mb-6">
          ⚠️ Low stock on some products!
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addedToCart={addedToCart}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

