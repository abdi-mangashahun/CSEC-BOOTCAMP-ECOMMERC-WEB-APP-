
import React from 'react';
import {BrowserRouter as Router , Routes , Route }  from "react-router-dom";
import Homes from './EcommerceComponent/Homes.jsx';
import ProductDetail from './EcommerceComponent/ProductDetail.jsx';
import Products from './EcommerceComponent/Products.jsx';
import Login from './EcommerceComponent/Login.jsx';
import Register from './EcommerceComponent/Register.jsx';
import ProductCard from './EcomrceReusableComponent/ProductCard.jsx';
import Checkout from './EcommerceComponent/Checkout.jsx';
import Cart from './EcommerceComponent/Cart.jsx'
import Navbar from './EcommerceComponent/Navbar.jsx';
import DarkMode from './EcommerceComponent/DarkMode.jsx';
import Hero from './EcommerceComponent/Hero.jsx';


const App = () =>{
  return (
<Router>
     <Routes>
        <Route path="/" element ={ <Homes /> }/>
        <Route path="/product-detail" element ={ <ProductDetail /> }/> 
         <Route path="/products" element ={ <Products /> }/>
        <Route path="/login" element ={<Login /> }/>
        <Route path="/register" element ={ <Register /> }/> 
        
  </Routes>
 
</Router>
  );
};
export default App;