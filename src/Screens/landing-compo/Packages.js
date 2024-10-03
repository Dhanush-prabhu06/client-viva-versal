// import React, { useRef, useState } from "react";
// import "./styleImports.css";

// const Packages = () => {
//   const rooms = [
//     {
//       img: "https:images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       title: "Luxurious Room",
//       price: "$15 per night",
//       link: "/luxuryroom",
//     },
//     {
//       img: "https:images.pexels.com/photos/3555618/pexels-photo-3555618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       title: "Comfort Room",
//       price: "$10 per night",
//       link: "/comfortroom",
//     },
//     {
//       img: "https:images.pexels.com/photos/16436919/pexels-photo-16436919/free-photo-of-room-with-the-view-of-palm-trees-in-a-tropical-resort.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       title: "Standard Room",
//       price: "$5 per night",
//       link: "/standardroom",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselRef = useRef(null);
//   const totalItems = rooms.length;

//   const moveCarousel = (direction) => {
//     let newIndex = currentIndex + direction;
//     if (newIndex < 0) newIndex = totalItems - 1;
//     if (newIndex >= totalItems) newIndex = 0;
//     setCurrentIndex(newIndex);
//     const carousel = carouselRef.current;
//     const cardWidth = carousel.clientWidth;
//     carousel.scrollTo({
//       left: cardWidth * newIndex,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="relative w-full">
//       {/* Header Section */}
//       <div className="text-center">
//         <h1 className="text-base tracking-widest text-green-700 pb-2">
//           DISCOVER OUR ROOMS
//         </h1>
//         <h2 className="text-4xl title text-gray-800 pb-4">
//           ROOMS AND PACKAGES
//         </h2>
//       </div>

//       {/* Mobile Carousel */}
//       <div className="block lg:hidden">
//         {/* New Navigation Section */}
//         <div className="relative flex items-center justify-between mb-4">
//           {/* Left Arrow */}
//           <button
//             onClick={() => moveCarousel(-1)}
//             className="absolute left-0 transform translate-x-4 text-green-700 text-5xl"
//           >
//             &#8592;
//           </button>

//           {/* Current Index and Total */}
//           <span className="mx-auto text-lg text-gray-800">
//             {currentIndex + 1}/{totalItems}
//           </span>

//           {/* Right Arrow */}
//           <button
//             onClick={() => moveCarousel(1)}
//             className="absolute right-0 transform -translate-x-4 text-green-700 text-5xl"
//           >
//             &#8594;
//           </button>
//         </div>

//         {/* Carousel Section */}
//         <div
//           ref={carouselRef}
//           className="flex transition-all duration-300"
//           style={{ scrollSnapType: "x mandatory", overflowX: "scroll" }}
//         >
//           {rooms.map((room, index) => (
//             <div
//               key={index}
//               className="flex-none w-full p-2"
//               style={{ scrollSnapAlign: "start" }}
//             >
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img
//                   src={room.img}
//                   alt={room.title}
//                   className="object-cover w-full h-64"
//                 />
//                 <div className="p-4 bg-black bg-opacity-70 text-white">
//                   <h2 className="text-2xl">{room.title}</h2>
//                   <p>{room.price}</p>
//                   <a
//                     href={room.link}
//                     className="bg-green-700 px-2 py-1 mt-2 inline-block"
//                   >
//                     View More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Desktop and Tablet Static Cards */}
//       <div className="hidden lg:flex justify-center space-x-4">
//         {rooms.map((room, index) => (
//           <div key={index} className="w-1/3 p-2">
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <img
//                 src={room.img}
//                 alt={room.title}
//                 className="object-cover w-full h-64"
//               />
//               <div className="p-4 bg-black bg-opacity-70 text-white">
//                 <h2 className="text-2xl">{room.title}</h2>
//                 <p>{room.price}</p>
//                 <a
//                   href={room.link}
//                   className="bg-green-700 px-2 py-1 mt-2 inline-block"
//                 >
//                   View More
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Packages;

// // import React, { useRef, useState, useEffect, useCallback } from "react";
// // import "./styleImports.css"; // Assuming external styles

// // const Packages = () => {
// //   const rooms = [
// //     {
// //       img: "https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       title: "Luxurious Room",
// //       price: "$15 per night",
// //       link: "/luxuryroom",
// //     },
// //     {
// //       img: "https://images.pexels.com/photos/3555618/pexels-photo-3555618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       title: "Comfort Room",
// //       price: "$10 per night",
// //       link: "/comfortroom",
// //     },
// //     {
// //       img: "https://images.pexels.com/photos/16436919/pexels-photo-16436919/free-photo-of-room-with-the-view-of-palm-trees-in-a-tropical-resort.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       title: "Standard Room",
// //       price: "$5 per night",
// //       link: "/standardroom",
// //     },
// //   ];

// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const carouselRef = useRef(null);
// //   const totalItems = rooms.length;

// //   // Move carousel programmatically
// //   const moveCarousel = (direction) => {
// //     let newIndex = currentIndex + direction;
// //     if (newIndex < 0) newIndex = totalItems - 1;
// //     if (newIndex >= totalItems) newIndex = 0;
// //     setCurrentIndex(newIndex);
// //     const carousel = carouselRef.current;
// //     const cardWidth = carousel.clientWidth;
// //     carousel.scrollTo({
// //       left: cardWidth * newIndex,
// //       behavior: "smooth",
// //     });
// //   };

// //   // Handle manual scroll and update the current index based on scroll position
// //   const handleScroll = useCallback(() => {
// //     const carousel = carouselRef.current;
// //     const cardWidth = carousel.clientWidth;
// //     const scrollLeft = carousel.scrollLeft;
// //     const newIndex = Math.round(scrollLeft / cardWidth);

// //     // Set the current index
// //     setCurrentIndex(newIndex);

// //     // Check for wrapping
// //     if (newIndex === totalItems) {
// //       setCurrentIndex(0);
// //       carousel.scrollTo({ left: 0, behavior: "smooth" });
// //     } else if (newIndex < 0) {
// //       setCurrentIndex(totalItems - 1);
// //       carousel.scrollTo({
// //         left: cardWidth * (totalItems - 1),
// //         behavior: "smooth",
// //       });
// //     }
// //   }, [totalItems]);

// //   useEffect(() => {
// //     const carousel = carouselRef.current;

// //     // Add scroll event listener to the carousel
// //     if (carousel) {
// //       carousel.addEventListener("scroll", handleScroll);
// //     }

// //     // Cleanup the event listener when component unmounts
// //     return () => {
// //       if (carousel) {
// //         carousel.removeEventListener("scroll", handleScroll);
// //       }
// //     };
// //   }, [handleScroll]);

// //   return (
// //     <div className="relative w-full">
// //       {/* Header Section */}
// //       <div className="text-center">
// //         <h1 className="text-base tracking-widest text-green-700 pb-2">
// //           DISCOVER OUR ROOMS
// //         </h1>
// //         <h2 className="text-4xl title text-gray-800 pb-4">
// //           ROOMS AND PACKAGES
// //         </h2>
// //       </div>

// //       {/* Mobile Carousel */}
// //       <div className="block lg:hidden">
// //         {/* New Navigation Section */}
// //         <div className="relative flex items-center justify-between mb-4">
// //           {/* Left Arrow */}
// //           <button
// //             onClick={() => moveCarousel(-1)}
// //             className="absolute left-0 transform translate-x-4 text-green-700 text-5xl"
// //           >
// //             &#8592;
// //           </button>

// //           {/* Current Index and Total */}
// //           <span className="mx-auto text-lg text-gray-800">
// //             {currentIndex + 1}/{totalItems}
// //           </span>

// //           {/* Right Arrow */}
// //           <button
// //             onClick={() => moveCarousel(1)}
// //             className="absolute right-0 transform -translate-x-4 text-green-700 text-5xl"
// //           >
// //             &#8594;
// //           </button>
// //         </div>

// //         {/* Carousel Section */}
// //         <div
// //           ref={carouselRef}
// //           className="flex transition-all duration-300"
// //           style={{
// //             scrollSnapType: "x mandatory",
// //             overflowX: "scroll",
// //             scrollBehavior: "smooth",
// //           }}
// //         >
// //           {rooms.map((room, index) => (
// //             <div
// //               key={index}
// //               className="flex-none w-full p-2"
// //               style={{ scrollSnapAlign: "start" }}
// //             >
// //               <div className="bg-white rounded-lg shadow-lg overflow-hidden">
// //                 <img
// //                   src={room.img}
// //                   alt={room.title}
// //                   className="object-cover w-full h-64"
// //                 />
// //                 <div className="p-4 bg-black bg-opacity-70 text-white">
// //                   <h2 className="text-2xl">{room.title}</h2>
// //                   <p>{room.price}</p>
// //                   <a
// //                     href={room.link}
// //                     className="bg-green-700 px-2 py-1 mt-2 inline-block"
// //                   >
// //                     View More
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Desktop and Tablet Static Cards */}
// //       <div className="hidden lg:flex justify-center space-x-4">
// //         {rooms.map((room, index) => (
// //           <div key={index} className="w-1/3 p-2">
// //             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
// //               <img
// //                 src={room.img}
// //                 alt={room.title}
// //                 className="object-cover w-full h-64"
// //               />
// //               <div className="p-4 bg-black bg-opacity-70 text-white">
// //                 <h2 className="text-2xl">{room.title}</h2>
// //                 <p>{room.price}</p>
// //                 <a
// //                   href={room.link}
// //                   className="bg-green-700 px-2 py-1 mt-2 inline-block"
// //                 >
// //                   View More
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Packages;

import React, { useRef, useState, useEffect, useCallback } from "react";
import "./styleImports.css"; // Assuming external styles

const Packages = () => {
  const rooms = [
    {
      img: "https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Luxurious Room",
      price: "$15 per night",
      link: "/luxuryroom",
    },
    {
      img: "https://images.pexels.com/photos/3555618/pexels-photo-3555618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Comfort Room",
      price: "$10 per night",
      link: "/comfortroom",
    },
    {
      img: "https://images.pexels.com/photos/16436919/pexels-photo-16436919/free-photo-of-room-with-the-view-of-palm-trees-in-a-tropical-resort.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Standard Room",
      price: "$5 per night",
      link: "/standardroom",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const totalItems = rooms.length;

  // Move carousel programmatically
  const moveCarousel = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = totalItems - 1;
    if (newIndex >= totalItems) newIndex = 0;
    setCurrentIndex(newIndex);
    const carousel = carouselRef.current;
    const cardWidth = carousel.clientWidth;
    carousel.scrollTo({
      left: cardWidth * newIndex,
      behavior: "smooth",
    });
  };

  // Use useRef to store debounce timer, ensuring the function is stable
  const debounceTimer = useRef(null);

  const handleScroll = useCallback(() => {
    const carousel = carouselRef.current;
    const cardWidth = carousel.clientWidth;
    const scrollLeft = carousel.scrollLeft;
    const newIndex = Math.round(scrollLeft / cardWidth);

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      if (Math.abs(newIndex - currentIndex) > 0) {
        setCurrentIndex(newIndex);
      }
    }, 100); // 100ms debounce delay
  }, [currentIndex]);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [handleScroll]);

  return (
    <div className="relative w-full">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-base tracking-widest text-green-700 pb-2">
          DISCOVER OUR ROOMS
        </h1>
        <h2 className="text-4xl title text-gray-800 pb-4">
          ROOMS AND PACKAGES
        </h2>
      </div>

      {/* Mobile Carousel */}
      <div className="block lg:hidden">
        {/* New Navigation Section */}
        <div className="relative flex items-center justify-between mb-4">
          {/* Left Arrow */}
          <button
            onClick={() => moveCarousel(-1)}
            className="absolute left-0 transform translate-x-4 text-green-700 text-5xl"
          >
            &#8592;
          </button>

          {/* Current Index and Total */}
          <span className="mx-auto text-lg text-gray-800">
            {currentIndex + 1}/{totalItems}
          </span>

          {/* Right Arrow */}
          <button
            onClick={() => moveCarousel(1)}
            className="absolute right-0 transform -translate-x-4 text-green-700 text-5xl"
          >
            &#8594;
          </button>
        </div>

        {/* Carousel Section */}
        <div
          ref={carouselRef}
          className="flex transition-all duration-300"
          style={{
            scrollSnapType: "x mandatory",
            overflowX: "scroll",
            scrollBehavior: "smooth",
          }}
        >
          {rooms.map((room, index) => (
            <div
              key={index}
              className="flex-none w-full p-2"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={room.img}
                  alt={room.title}
                  className="object-cover w-full h-64"
                />
                <div className="p-4 bg-black bg-opacity-70 text-white">
                  <h2 className="text-2xl">{room.title}</h2>
                  <p>{room.price}</p>
                  <a
                    href={room.link}
                    className="bg-green-700 px-2 py-1 mt-2 inline-block"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop and Tablet Static Cards */}
      <div className="hidden lg:flex justify-center space-x-4">
        {rooms.map((room, index) => (
          <div key={index} className="w-1/3 p-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={room.img}
                alt={room.title}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-black bg-opacity-70 text-white">
                <h2 className="text-2xl">{room.title}</h2>
                <p>{room.price}</p>
                <a
                  href={room.link}
                  className="bg-green-700 px-2 py-1 mt-2 inline-block"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
