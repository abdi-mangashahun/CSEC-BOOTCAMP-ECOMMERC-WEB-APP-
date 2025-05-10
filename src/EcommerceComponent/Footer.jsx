
import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white  w-full  ">
      <div className="w-full bg-white  py-8 flex flex-col items-center justify-center space-y-2 text-center">
  <p className="text-sm text-gray-700 font-semibold">See personalized recommendations</p>
  <Link to="/login">
    <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-sm font-bold rounded-md shadow-md">
      Sign in
    </button>
  </Link>
  <p className="text-sm text-gray-600">
    New customer?{" "}
    <Link to="/register" className="text-blue-600 hover:underline">
      Start here.
    </Link>
  </p>
</div>

      <div className="max-w-full mx-auto text-center max-sm:px-8 py-4 grid grid-cols-4 max-sm:grid-cols-1 max-sm:text-center max-md:grid-cols-2 gap-8">
        
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
        
     
        <p className="text-sm  text-gray-400">&copy; {new Date().getFullYear()} Ninja. All rights reserved.</p>
        <div className="text-xs mb-5 text-gray-500 mt-2">
          <a href="#" className="hover:underline mx-2">Privacy</a> | 
          <a href="#" className="hover:underline mx-2">Terms</a> | 
          <a href="#" className="hover:underline mx-2">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
