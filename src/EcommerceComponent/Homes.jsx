
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Products from './Products';
import Footer from './Footer';
import { Search } from "lucide-react";
import { FaShoppingCart, FaUserPlus, FaBars } from 'react-icons/fa';
import Banner from './Banner';
import { useCart } from './CartContext';
import { MoreVertical, ChevronFirst } from "lucide-react";
import PhotoGrid from "./PhotoGrid"
import axios from 'axios'

const Homes = () => {
  const [language, setLanguage] = useState("English");
  const { cartItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className="flex w-full ">
      {/* Sidebar */}
      {/* Overlay */}
{sidebarOpen && (
  <div
    className="fixed inset-0  bg-opacity-20 z-[100] transition-opacity duration-300"
    onClick={() => setSidebarOpen(false)}
  />
)}

{/* Sidebar */}
<aside
  className={`fixed top-0 left-0 h-screen w-[30%] max-w-[280px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
  <nav className="h-full flex flex-col">
    <div className="p-4 pb-2 flex justify-between items-center border-b">
      <h2 className="font-semibold text-lg">Menu</h2>
      <button
        onClick={() => setSidebarOpen(false)}
        className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200"
      >
        <ChevronFirst />
      </button>
    </div>

    <ul className="flex-1 px-4 py-4 overflow-y-auto space-y-3">
      <li className="flex items-center gap-3 mb-5 cursor-pointer hover:text-orange-500">
        <FaBars />
        <span></span>
      </li>
      <li className="flex items-center gap-3 cursor-pointer hover:text-orange-500">
        <FaUserPlus />
        <span>Register</span>
      </li>
      <li className="flex items-center gap-3 cursor-pointer hover:text-orange-500">
        <FaShoppingCart />
        <span>Cart</span>
        {cartItems.length > 0 && (
          <div className="ml-auto w-2 h-2 rounded-full bg-indigo-400" />
        )}
      </li>
      <h1 className="font-bold pt-5">Trending</h1>
      <p>Jordan 1</p>
      <p>Movers</p>
      <p>Mac</p>
      <p>Hoodie</p>
    </ul>

    <div className="border-t flex p-4 items-center">
      <img src="ben.jpg" alt="Profile" className="w-10 h-10 rounded-md" />
      <div className="ml-3 leading-4">
        <h4 className="font-semibold">Abdi</h4>
        <span className="text-xs text-gray-600">a@gmail</span>
      </div>
      <MoreVertical size={20} className="ml-auto" />
    </div>
  </nav>
</aside>



      {/* Main content area */}
      <div className="flex-1 bg-white text-black flex flex-col items-center justify-center">
        {/* Top Navbar */}
        <div className="sticky top-0 z-50 w-full bg-black shadow-lg min-sm:pb-0 min-sm:px-0 min-sm:mb-0 px-3 py-2">
          <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* Mobile Header */}
            <div className="flex sm:hidden justify-between  items-center w-full">
              <div className="flex items-center gap-2">
                <button
                  className="text-white text-2xl"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
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
                  <button className="relative flex items-center gap-2 p-2  text-white rounded-md hover:bg-blue-700">
                    <FaShoppingCart className="w-5 h-5" />
                    {cartItems.length > 0 && (
                      <span className="absolute top-0 right-11  text-orange-400 text-sm  font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItems.length}
                      </span>
                    )}
                    <span>Cart</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden sm:flex w-full items-center justify-between">
              <div className="flex items-center space-x-2 min-w-[200px]">
                <h1 className="font-bold font-montaga text-3xl text-white flex items-center space-x-1">
                  <span>Ninjas</span>
                  <span className="text-orange-500 text-2xl">🛒</span>
                </h1>
              </div>
              <div className="hidden sm:block bg-white">
  <select
    className="p-1 border border-gray-300 bg-gray-400  w-13 "
    defaultValue="En"
  >
    <option className='text-black' value="En">En</option>
    <option  className='text-black' value="Amh">Am</option>
    <option  className='text-black' value="Oro">Oro</option>
  </select>
</div>

              {/* Search bar */}
              <div className="flex-1 flex justify-center px-4">
                <div className="flex w-full max-w-[1100px]">
                  <select className="bg-gray-400 text-black p-2 rounded-l-lg border-r w-15 border-gray-600 outline-none">
                    <option value="all">All</option>
                    <option value="mens">Men's</option>
                    <option value="womens">Women's</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelry">Jewelry</option>
                    <option value="perfume">Perfume</option>
                    <option value="watches">Watches</option>
                    <option value="mobiles">Mobiles</option>
                    <option value="mobiles">Books</option>
                    <option value="mobiles">Baby</option>
                    <option value="mobiles">Digital Musics</option>
                  </select>
                  <div className="relative flex-1">
                    <input
                      className="w-full text-black bg-white rounded-r-lg p-2 pr-10 outline-none"
                      type="text"
                      placeholder="Search for products here ..."
                    />
                    <Search className="absolute right-0 top-1/2 -translate-y-1/2 bg-amber-500 text-black rounded-md w-7 h-full pointer-events-none" />
                  </div>
                </div>
              </div>
  {/* Right-side icons */}

              {/* Right-side icons */}
              <div className="flex  items-center space-x-4 ">
                <Link to="/register">
                  <FaUserPlus className="text-xl text-white" />
                </Link>
                <Link to="/cart">
                  <button className="relative flex items-center gap-2 p-2  text-white rounded-md hover:bg-blue-700">
                    <FaShoppingCart className="w-5 h-5" />
                    {cartItems.length > 0 && (
                      <span className="absolute -top-1 -right-0.2 text-orange-500 text-sm font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItems.length}
                      </span>
                    )}
                    <span>Cart</span>
                  </button>
                </Link>
              </div>
          

            </div>
            
</div>
<div className="hidden sm:flex w-full bg-gray-500  flex py-2 ">
  <div className=" flex items-center space-x-6">
 < div className='flex items-center justify-centre gap-2'> <button className='hover:border border-gray-400 flex flex-row space-x-1'> <button
      className="text-blue-200 rounded-sm  text-3xl"
      onClick={() => setSidebarOpen(true)}
    >
      <FaBars />
    </button>
<h1 className='text-white text-xl '>All</h1> </button></div>
     <div className="flex space-x-15  text-white">
      <span className="cursor-pointer hover:text-orange-400">Home</span>
      <div className="relative group">
        <span className="cursor-pointer hover:text-orange-400">Categories</span>
        <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-black text-white border border-gray-700 rounded-md p-2 space-y-1 z-50">
          <div className="hover:text-orange-400 cursor-pointer">Men's</div>
          <div className="hover:text-orange-400 cursor-pointer">Women's</div>
          <div className="hover:text-orange-400 cursor-pointer">Jewelry</div>
          <div className="hover:text-orange-400 cursor-pointer">Perfume</div>
          <div className="hover:text-orange-400 cursor-pointer">Watches</div>
          <div className="hover:text-orange-400 cursor-pointer">Mobiles</div>
        </div>
      </div>
      <span className="cursor-pointer hover:text-orange-400">Blog</span>
      <span className="cursor-pointer hover:text-orange-400">Hot Offers</span>
      <span className="cursor-pointer hover:text-orange-400">Customer Service</span>
    </div>
  </div>
</div>  
<div className="sm:hidden sticky bottom-0 w-full bg-black text-white py-2 flex justify-between items-center gap-10">
        <Link to="/" className="text-white">Home</Link>
          <Link to="/categories" className="text-white">Categories</Link>
          <Link to="/products" className="text-white">New</Link>
          <Link to="/offers" className="text-white">Deals</Link>
        </div>


          </div>
        </div>
        


      
        <Banner />
        <PhotoGrid />
        <Products />
        <Footer />
      </div>
    </div>
  );
};

export default Homes;