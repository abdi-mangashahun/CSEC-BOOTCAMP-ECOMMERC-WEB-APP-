// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 w-full ">
      <div className="max-w-full mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Get to Know Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Ninja</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press Releases</a></li>
            <li><a href="#" className="hover:underline">Ninja Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Make Money with Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Sell on Ninja</a></li>
            <li><a href="#" className="hover:underline">Affiliate Program</a></li>
            <li><a href="#" className="hover:underline">Advertise Products</a></li>
            <li><a href="#" className="hover:underline">Fulfillment by Ninja</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Let Us Help You</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Your Account</a></li>
            <li><a href="#" className="hover:underline">Returns Centre</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        
     
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Ninja. All rights reserved.</p>
        <div className="text-xs text-gray-500 mt-2">
          <a href="#" className="hover:underline mx-2">Privacy</a> | 
          <a href="#" className="hover:underline mx-2">Terms</a> | 
          <a href="#" className="hover:underline mx-2">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
