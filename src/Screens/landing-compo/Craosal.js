import React, { useState, useEffect } from "react";
// import {useRef} from 'react'

const images = [
  {
    src: require("../../assets/images/img3.jpg"),
  },
  {
    src: require("../../assets/images/img1.jpg"),
  },
  {
    src: require("../../assets/images/img2.jpg"),
  },
  {
    src: "https://gos3.ibcdn.com/ea53f190d7a811e580bb001ec9b85d13.png",
  },
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchMove, setTouchMove] = useState(null);
  //const carouselRef = useRef(null);

  const totalImages = images.length;
  const totalSlides = totalImages + 2;

  const moveCarousel = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + direction);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setCurrentIndex(totalImages);
      setIsTransitioning(false);
    } else if (currentIndex === totalSlides - 1) {
      setCurrentIndex(1);
      setIsTransitioning(false);
    } else {
      setIsTransitioning(false);
    }
  };

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setTouchMove(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchMove) return;

    const swipeDistance = touchMove - touchStart;

    if (Math.abs(swipeDistance) > 50) {
      moveCarousel(swipeDistance < 0 ? 1 : -1);
    }

    setTouchStart(null);
    setTouchMove(null);
  };

  useEffect(() => {
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  });

  // Auto-slide effect with 2-second delay
  useEffect(() => {
    const intervalId = setInterval(() => {
      moveCarousel(1); // Move to the next slide every 2 seconds
    }, 3500); // CHANGED: Interval set to 2000ms (2 seconds)

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, [isTransitioning]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Buttons Container */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        {/* Previous Button */}
        <button
          onClick={() => moveCarousel(-1)}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 z-20 pointer-events-auto md:p-3"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={() => moveCarousel(1)}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 z-20 pointer-events-auto md:p-3"
        >
          &#10095;
        </button>
      </div>

      {/* Image Container */}
      <div
        className={`flex transition-transform duration-500 ease-in-out`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning
            ? "transform 2.5s ease-in-out 0.1s" // CHANGED: Transition set to 1 second
            : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Cloned last image */}
        <div className="flex-none w-full">
          <img
            src={images[totalImages - 1].src}
            alt={`${totalImages}`}
            className="object-cover w-full h-[300px] md:h-[500px]"
          />
        </div>

        {images.map((image, index) => (
          <div key={index} className="flex-none w-full">
            <img
              src={image.src}
              alt={`${index + 1}`}
              className="object-cover w-full h-[300px] md:h-[500px]"
              loading="lazy"
            />
          </div>
        ))}

        {/* Cloned first image */}
        <div className="flex-none w-full">
          <img
            src={images[0].src}
            alt="..."
            className="object-cover w-full h-[300px] md:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
