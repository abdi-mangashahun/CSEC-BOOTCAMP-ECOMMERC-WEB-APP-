
import React, { useState, useEffect } from 'react';

const Banner = () => {
  const baseImages = ["./ban.jpg", "./BANNED.jpg","./oop.jpg","./ben.jpg"];
  const images = Array(6).fill(null).map((_, i) => baseImages[i % baseImages.length]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(typeof window !== "undefined" && window.innerWidth < 640);

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imagesPerSlide = isSmallScreen ? 1 : 2;
  const visibleImages = images.slice(currentIndex, currentIndex + imagesPerSlide);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + imagesPerSlide) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - imagesPerSlide + images.length) % images.length);
  };

  // Autoplay: change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval); // Clear interval on unmount or rerun
  }, [currentIndex, isSmallScreen]);

  // Handle image click to slide
  const handleImageClick = (index) => {
    if (index === 0) {
      goToPrevious(); // Click on the first image goes to the previous slide
    } else {
      goToNext(); // Click on the second image goes to the next slide
    }
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="relative flex items-center justify-center">
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-4xl sm:text-5xl font-bold text-white  sm:p-2 rounded-full z-10"
        >
          &lt;
        </button>

        <div className="flex w-full justify-between  sm:px-4 transition-all duration-500 ease-in-out">
          {visibleImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className={`h-[200px] sm:h-[350px] object-cover sm:object-cover cursor-pointer ${
                isSmallScreen ? "w-full" : "w-1/2"
              }`}
              onClick={() => handleImageClick(index)} // Click to slide
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-4xl sm:text-5xl font-bold text-white p-1 sm:p-2 rounded-full z-10"
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
