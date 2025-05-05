
import React, { useState } from 'react';
import { Search, LogIn, Heart, Bell } from "lucide-react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Homes = () => {
  const [language, setLanguage] = useState("English");

  return (
    <div className="bg-gray-300 text-black flex flex-col items-center justify-center min-h-screen">
      {/* Top Section */}
      <div className='sticky top-0 z-1000 m-2 bg-white border-collapse'>
      <div className="w-full bg-gray-300 flex justify-between items-center   px-4 py-2 text-sm">
        {/* Left Side: Social Media Icons */}
        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-600 hover:text-gray-800" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-600 hover:text-gray-800" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-600 hover:text-gray-800" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-600 hover:text-gray-800" />
          </a>
        </div>

        {/* Center: Free Shipping Text */}
        <h1 className="max-md:hidden text-gray-800 font-semibold">Free Shipping to 154 Countries</h1>

        {/* Right Side: Language Switcher */}
        <div className="flex items-center gap-2">
          <label htmlFor="language" className="text-gray-600">Language:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-gray-400 rounded px-2 py-1 text-sm focus:outline-none"
          >
            <option value="English">English</option>
            <option value="Amharic">Amharic</option>
          </select>
        </div>
      </div>

      {/* Header Section */}
      <div className="flex justify-center items-center sticky top-0 z-50 w-full bg-gray-300 shadow px-4 py-1 gap-38 max-sm:gap-20 max-sm:p-1">
        <h1 className="font-bold text-2xl text-black p-5">Ninja</h1>
        <div className="relative w-fit">
          <input
            className="w-200 max-md:w-60 border border-black text-black rounded-lg p-1 pr-10 focus:ring-1 focus:ring-black focus:outline-none"
            type="text"
            id="product"
            placeholder="Search for products here ..."
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-black w-4 h-4 pointer-events-none" />
        </div>
        <div className="flex max-md:hidden gap-8 items-center">
          <a href="/login">
            <LogIn className="w-5 h-5 text-gray-800" />
          </a>
          <Heart className="w-5 h-5 text-red-500" />
          <Bell className="w-5 h-5 text-yellow-500" />
        </div>
      </div>

      {/* Navigation Bar */}
      <Menubar className="w-full sticky max-sm:flex-col top-0 flex justify-center border-none items-center bg-gray-300  p-2 gap-20">
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
      <div className="relative w-full mx-auto">
        <img
          src="./abdi.jpg"
          alt="Banner"
          className="w-full h-[500px] object-cover  z-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">
            Discover Our Latest Collection
          </h1>
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
    </div>
  );
};

export default Homes;