
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Products from './Products';
import Footer from './Footer';
import { Search } from "lucide-react";
import { FaShoppingCart, FaUserPlus, FaBars } from 'react-icons/fa';
import Banner from './Banner';
import { useCart } from './CartContext'; // <-- Import cart context

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Homes = () => {
  const [language, setLanguage] = useState("English");
  const { cartItems } = useCart(); // <-- Use cart context
 
  return (
    <div className="bg-black text-black flex flex-col items-center justify-center">
      <div className="sticky top-0 z-50 w-full bg-black shadow-lg px-4 py-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Small Screen Layout */}
          <div className="flex sm:hidden justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <button
                className="text-white text-2xl"
                onClick={() => alert("Hamburger Menu Clicked")}
             
              >
                <FaBars />
              </button>
              <h1 className="font-bold font-montaga text-3xl text-white flex items-center space-x-1">
                <span>Ninjas</span>
                <span className="text-orange-500 text-2xl">🛒</span>
              </h1>
            </div>
              
            <div className="flex items-center gap-4">
              <Link to="/register">
                <FaUserPlus className="text-xl text-white" />
              </Link>
              <Link to="/cart">
                <button className="relative flex items-center gap-2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  <FaShoppingCart className="w-5 h-5" />
                  {cartItems.length > 0 && (
                    <span className="absolute top-0 right-6 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                  <span>Cart</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Large Screen Layout */}
          <div className="hidden sm:flex w-full items-center justify-between">
         

            {/* Left: Logo */}
            <div className="flex items-center space-x-2 min-w-[200px]">
              <h1 className="font-bold font-montaga text-3xl text-white flex items-center space-x-1">
                <span>Ninjas</span>
                <span className="text-orange-500 text-2xl">🛒</span>
              </h1>
            </div>

           {/* Middle: Search Bar with Dropdown */}
<div className="flex-1 flex justify-center px-10">
  <div className="flex w-full max-w-[1100px]">
    <select className="bg-gray-800 text-white p-2 rounded-l-lg border-r border-gray-600 outline-none">
      <option value="all">All</option>
      <option value="mens">Men's</option>
      <option value="womens">Women's</option>
      <option value="electronics">Electronics</option>
      <option value="jewelry">Jewelry</option>
      <option value="perfume">Perfume</option>
      <option value="watches">Watches</option>
      <option value="mobiles">Mobiles</option>
    </select>
    <div className="relative flex-1">
      <input
        className="w-full border border-gray-100 text-white bg-black rounded-r-lg p-2 pr-10 outline-none"
        type="text"
        placeholder="Search for products here ..."
      />
      <Search className="absolute right-0 top-1/2 -translate-y-1/2 bg-amber-500 text-black rounded-lg w-7 h-full pointer-events-none" />
    </div>
  </div>
</div>


            {/* Right: Icons */}
            <div className="flex items-center space-x-6 min-w-[200px] justify-end">
        
 


              <Link to="/register">
                <FaUserPlus className="text-xl text-white" />
              </Link>
              <Link to="/cart">
                <button className="relative flex items-center gap-2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  <FaShoppingCart className="w-5 h-5" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                  <span>Cart</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Menubar className="w-full sticky top-0 flex justify-center items-center border-none bg-black p-2 gap-10">
        <MenubarMenu>
          <MenubarTrigger className="text-white">Home</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-white">Categories</MenubarTrigger>
          <MenubarContent className="bg-black text-white">
            <MenubarItem>Men's</MenubarItem>
            <MenubarItem>Women's</MenubarItem>
            <MenubarItem>Jewelry</MenubarItem>
            <MenubarItem>Perfume</MenubarItem>
            <MenubarItem>Watch</MenubarItem>
            <MenubarItem>Clothes</MenubarItem>
            <MenubarItem>Electronics</MenubarItem>
            <MenubarItem>SkinCare</MenubarItem>
            <MenubarItem>Football</MenubarItem>
            <MenubarItem>Mobiles</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-white">Blog</MenubarTrigger>
          <MenubarContent className="bg-black text-white">
            <MenubarItem>New Blog Post</MenubarItem>
            <MenubarItem>Top Blogs</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-white">Hot Offers</MenubarTrigger>
          <MenubarContent className="bg-black text-white">
            <MenubarItem>Special Discounts</MenubarItem>
            <MenubarItem>Flash Sales</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <Banner />
      <Products />
      <Footer />
    </div>
  );
};

export default Homes;
