import React, { useState } from 'react';

const Banner = () => {
  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images
  const images = [
    "./ban.jpg",  // First image
    "./BANNED.jpg",  // Second image
    // Add more images here if needed
  ];

  // Function to go to the next image
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    );
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="relative flex justify-center items-center">
        
        <button
          onClick={goToPreviousImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-5xl font-bold text-white p-2 rounded-full z-10"
        >
          &lt;
        </button>

      
        <img
          src={images[currentImageIndex]}
          alt="Banner"
          className="w-full h-[250px] object-cover"
        />

       
        <button
          onClick={goToNextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-5xl font-bold text-white p-2 rounded-full z-10"
        >
          &gt;
        </button>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>

     
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <a href="/products">
          <button className="group flex items-center max-sm:text-sm max-sm:px-3 max-sm:py-1.5 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all shadow-lg">
            SHOP NOW
            <span className="ml-2 max-sm:ml-1 flex items-center justify-center max-sm:w-4 max-sm:h-4 w-8 h-8 rounded-full bg-white text-red-600 group-hover:animate-bounce">
              →
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
