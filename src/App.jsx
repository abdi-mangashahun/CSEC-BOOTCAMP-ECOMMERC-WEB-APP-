
import React from 'react';
import {BrowserRouter as Router , Routes , Route }  from "react-router-dom";
import Homes from './EcommercePages/Homes.jsx';
import ProductDetail from './EcommercePages/ProductDetail';
import Products from './EcommercePages/Products';
import Login from './EcommercePages/Login';
import Register from './EcommercePages/Register';



const App = () =>{
  return (
<Router>
     <Routes>
        <Route path="/" element ={ <Homes /> }/>
        <Route path="/product-detail" element ={ <ProductDetail /> }/> 
         <Route path="/products" element ={ <Products /> }/>
        <Route path="/login" element ={<Login /> }/>
        <Route path="/register" element ={ <Register /> }/> */}
        
  </Routes>
</Router>
  );
};
export default App;