
// // import React from 'react';

// // const PhotoGrid = () => {
// //   const imageURLs = [
// //     "/shoe.jpg",
// //     "/wa.jpg",
// //     "/glass.jpg",
// //     "/braclet.jpg"
// //   ];

// //   const categories = [
// //     "SHOES",
// //     "WATCHES",
// //     "FASHION",
// //     "BEUTY"
// //   ];

// //   return (
// //     <div className="bg-[url('/a.jpg')] w-full max-sm:hidden p-3">
// //       <div className="flex justify-between gap-6  p-3">
// //         {imageURLs.map((imageURL, index) => (
// //           <div key={index} className="w-1/4 flex flex-col items-center">
// //             {/* Category name ABOVE the image */}
// //             <div className="mb-2 text-lg font-semibold text-black text-center">
// //               {categories[index]}
// //             </div>
// //             <img
// //               src={imageURL}
// //               alt={`Image ${index + 1}`}
// //               className="w-full h-[350px] object-cover rounded-md"
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PhotoGrid;
// import React from 'react';

// const PhotoGrid = () => {
//   const imageURLs = [
//     "/shoe.jpg",
//     "/wa.jpg",
//     "/glass.jpg",
//     "/braclet.jpg"
//   ];

//   const categories = [
//     "SHOES",
//     "WATCHES",
//     "FASHION",
//     "BEUTY"
//   ];

//   return (
//     <div className="bg-[url('/a.jpg')] w-full p-3">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-3">
//         {imageURLs.map((imageURL, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <div className="mb-2 text-lg font-semibold text-black text-center">
//               {categories[index]}
//             </div>
//             <img
//               src={imageURL}
//               alt={`Image ${index + 1}`}
//               className="w-full h-[300px] object-cover rounded-md"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PhotoGrid;
import React from 'react';

// Easily change these 4 base images later
const baseImages = [
  "/shoe.jpg",
  "/wa.jpg",
  "/glass.jpg",
  "/braclet.jpg"
];

// Generate 12 images by repeating base images 3 times
const imageURLs = Array(3)
  .fill(baseImages)
  .flat(); // Flattens [[...], [...], [...]] into one array of 12

const PhotoGrid = () => {
  return (
    <div className="bg-[url('/a.jpg')] w-full overflow-hidden py-6">
      <div className="flex items-center gap-6 px-3 animate-horizontal-scroll">
        {imageURLs.map((imageURL, index) => (
          <div key={index} className="flex-shrink-0 text-center">
            <img
              src={imageURL}
              alt={`Image ${index + 1}`}
              className="w-[200px] h-[250px] object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      {/* CSS animation for subtle side-to-side motion */}
      <style jsx>{`
        @keyframes scrollSideways {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-40px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-horizontal-scroll {
          animation: scrollSideways 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PhotoGrid;
