import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Products from './Products';
import Footer from './Footer';
import { Search, LogIn } from "lucide-react";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from '@/components/ui/button';

const Homes = () => {
  const [showAltBanner, setShowAltBanner] = useState(false);
  const [language, setLanguage] = useState("En");
  const [searchText, setSearchText] = useState("Clothes");
  const words = ["Clothes", "Shoes", "Watches", "Techs"];  

  const toggleBanner = () => {
    setShowAltBanner((prev) => !prev);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setSearchText((prev) => {
        const currentIndex = words.indexOf(prev);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="bg-violet-200 text-white flex flex-col items-center justify-center ">
      <div className='sticky top-0 z-100'>
      <div className="flex justify-between items-center bg-[#131921] text-white p-4">

<div className="flex items-center p-5">
  <h1 className="text-4xl font-extrabold font-montaga text-white relative">
    Ninjas
    <span className="absolute left-0 -bottom-2 w-full h-1 bg-yellow-400 rounded-full"></span>
  </h1>
  <svg
    className="ml-2 w-6 h-6 text-yellow-400 transform rotate-45"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10.293 15.707a1 1 0 010-1.414l4.95-4.95a1 1 0 00-1.414-1.414L9 12.586 5.172 8.758a1 1 0 10-1.414 1.414l5.122 5.122a1 1 0 001.414 0z" />
  </svg>
</div>

<div className="flex items-center gap-4 pr-5">
  <a href='/register'>
    <FaUserPlus className="text-xl text-white" />
  </a>
  <Link to="/cart">
    <button className="flex items-center gap-2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
      <FaShoppingCart className="w-5 h-5" />
      <span>Cart</span>
    </button>
  </Link>
</div>

</div>


   
        {/* Menu Bar with Dropdown */}
        <Menubar className="w-full sticky top-0 flex justify-center items-center border-none bg-violet-200 p-2 gap-20">
          <MenubarMenu>
            <MenubarTrigger className="text-black">Home</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-black">Categories</MenubarTrigger>
            <MenubarContent className="bg-white text-black">
              <MenubarItem>Men's</MenubarItem>
              <MenubarItem>Women's</MenubarItem>
              <MenubarItem>Jewelry</MenubarItem>
              <MenubarItem>Perfume</MenubarItem>
              <MenubarItem>Watch</MenubarItem>
              <MenubarItem>Clothes</MenubarItem>
              <MenubarItem>Electronics</MenubarItem>
              <MenubarItem>Skincare</MenubarItem>
              <MenubarItem>Football</MenubarItem>
              <MenubarItem>Mobiles</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-black">Blog</MenubarTrigger>
            <MenubarContent className="bg-white text-black">
              <MenubarItem>New Blog Post</MenubarItem>
              <MenubarItem>Top Blogs</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-black">Hot Offers</MenubarTrigger>
            <MenubarContent className="bg-white text-black">
              <MenubarItem>Special Discounts</MenubarItem>
              <MenubarItem>Flash Sales</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    
      {/* Banner Section */}
      <div className="relative w-full mx-auto h-[250px] overflow-hidden">
        <div className="flex justify-center items-center h-full">
          {!showAltBanner ? (
            <>
              <img src="./ban.jpg" alt="Banner 1" className="w-1/2 h-full object-cover" />
              <img src="./oop.jpg" alt="Banner 2" className="w-1/2 h-full object-cover" />
            </>
          ) : (
            <>
              <img src="./been.jpg" alt="Alternate Banner 1" className="w-1/2 h-full object-cover" />
              <img src="./BANNED.jpg" alt="Alternate Banner 2" className="w-1/2 h-full object-cover" />
            </>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
      
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <a href="/products">
            <button className="group flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all shadow-lg">
              SHOP NOW
              <span className="ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-white text-red-600 group-hover:animate-bounce">
                →
              </span>
            </button>
          </a>
        </div>

        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-8xl text-white bg-opacity-40 p-2 rounded-full hover:bg-opacity-60" onClick={toggleBanner}>
          &#8249;
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-8xl text-white bg-opacity-40 p-2 rounded-full hover:bg-opacity-60" onClick={toggleBanner}>
          &#8250;
        </button>
      </div>

      <Products />
      <Footer />
    </div>
  );
};

export default Homes;