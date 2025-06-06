
import React from 'react';
import {BrowserRouter as Router , Routes , Route }  from "react-router-dom";
import Homes from './EcommerceComponent/Homes.jsx';
import axios from 'axios'
import Products from './EcommerceComponent/Products.jsx';
import Login from './EcommerceComponent/Login.jsx';
import Register from './EcommerceComponent/Register.jsx';
import Cart from './EcommerceComponent/Cart.jsx'
import Navbar from './EcommerceComponent/Navbar.jsx';
import DarkMode from './EcommerceComponent/DarkMode.jsx';
import Hero from './EcommerceComponent/Hero.jsx';
import ProductDetails from "./EcommerceComponent/ProductDetails";
import { CartProvider } from "./EcommerceComponent/CartContext";
import Banner from './EcommerceComponent/Banner.jsx';
import PhotoGrid from "./EcommerceComponent/PhotoGrid"
const App = () =>{
  return (
<Router>
  <CartProvider>
     <Routes>
        <Route path="/" element ={ <Homes /> }/>
  
        <Route path="/cart" element ={ <Cart /> }/>
         <Route path="/products" element ={ <Products /> }/>
         <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/login" element ={<Login /> }/>
        <Route path="/register" element ={ <Register /> }/>      
  </Routes>
  </CartProvider>
</Router>
  );
};
export default App;