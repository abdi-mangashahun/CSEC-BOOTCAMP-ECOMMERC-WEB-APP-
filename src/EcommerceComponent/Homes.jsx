import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Products from './Products';
import Footer from './Footer';
import { Search, } from "lucide-react";
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from '@/components/ui/button';

const Homes = () => {
  const [language, setLanguage] = useState("English");

  return (
    <div className="bg-black text-black flex flex-col items-center justify-center ">
      <div className='sticky top-0 z-100'>
     
        <div className="sticky top-0 z-50 w-full bg-black shadow-lg gap-28 px-4 py-2 flex justify-between items-center">
         {/* <h1 className="font-bold font-montaga text-3xl text-white p-5">Ninjas</h1> */}
         <h1 className="font-bold text-4xl text-black p-5 flex items-center justify-center">
  Ninjas
  <span className="text-yellow-500 ml-2">&#8594;</span> 
</h1>

          <div className="relative w-fit">          
            <input
              className="w-200 max-md:w-60 border border-gray-100 text-white rounded-lg p-2 pr-10  outline-none"
              type="text"
              id="product"
              placeholder="Search for products here ..."
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-white w-5 h-5 pointer-events-none" />
          </div>
          <div className="flex max-md:hidden gap-8 items-center">
           
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

      
        <Menubar className="w-full sticky top-0 flex justify-center items-center border-none bg-black p-2 gap-20">
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
      </div>
      {/* Banner Section */}
      <div className="relative w-full mx-auto">
        <div className='flex justify-center items-center'> 
          <img
            src="./ban.jpg"
            alt="Banner"
            className="w-full h-[250px] object-cover"
          />  
          <img
            src="./oop.jpg"
            alt="Banner"
            className="w-full h-[250px] object-cover"
          />
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
      </div> 
      <Products />
      <Footer />
    </div>
  );
};

export default Homes;