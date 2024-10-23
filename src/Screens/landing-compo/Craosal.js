import React, { useState, useEffect, useCallback } from "react";

const images = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/crousal%2FIMG_5709.avif?alt=media&token=c4143750-370a-4946-ad4c-9f5c0e3ee3a8",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/crousal%2FIMG_5716.webp?alt=media&token=1fd42d76-5e82-4d54-b66b-97c5505fca72",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/crousal%2FIMG_5782.webp?alt=media&token=925a176d-157c-4f58-86cb-8368fd1de507",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/crousal%2Fgoogle-download-evening.avif?alt=media&token=14aac8d4-ae45-4c34-af7c-d4454dfd446c",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchMove, setTouchMove] = useState(null);
  const [imageLoadStatus, setImageLoadStatus] = useState(
    Array(images.length).fill(false)
  ); // Track the load status of each image
  const [allLoaded, setAllLoaded] = useState(false); // Check if all images are loaded

  const totalImages = images.length;
  const totalSlides = totalImages + 2;

  // Function to handle image loading
  const handleImageLoad = (index) => {
    setImageLoadStatus((prevStatus) => {
      const updatedStatus = [...prevStatus];
      updatedStatus[index] = true;
      return updatedStatus;
    });
  };

  // Watch image load status to determine if all images are loaded
  useEffect(() => {
    if (imageLoadStatus.every((status) => status === true)) {
      setAllLoaded(true); // When all images are loaded
    }
  }, [imageLoadStatus]);

  const moveCarousel = useCallback(
    (direction) => {
      if (isTransitioning || !allLoaded) return; // Prevent movement if still loading or transitioning
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + direction);
    },
    [isTransitioning, allLoaded]
  );

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

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchMove || !allLoaded) return; // Only allow swipe when all images are loaded

    const swipeDistance = touchMove - touchStart;

    if (Math.abs(swipeDistance) > 50) {
      moveCarousel(swipeDistance < 0 ? 1 : -1);
    }

    setTouchStart(null);
    setTouchMove(null);
  }, [touchMove, touchStart, moveCarousel, allLoaded]);

  // Auto-slide effect with 3.5-second delay
  useEffect(() => {
    if (!allLoaded) return; // Only auto-slide when all images are loaded

    const intervalId = setInterval(() => {
      moveCarousel(1); // Move to the next slide every 3.5 seconds
    }, 3500);

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, [moveCarousel, allLoaded]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Buttons Container */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        {/* Previous Button */}
        <button
          onClick={() => moveCarousel(-1)}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 z-20 pointer-events-auto md:p-3"
          disabled={!allLoaded} // Disable button until all images are loaded
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={() => moveCarousel(1)}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 z-20 pointer-events-auto md:p-3"
          disabled={!allLoaded} // Disable button until all images are loaded
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
            ? "transform 2.5s ease-in-out 0.1s"
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
            onLoad={() => handleImageLoad(totalImages - 1)} // Handle loading
          />
        </div>

        {images.map((image, index) => (
          <div key={index} className="flex-none w-full">
            <img
              src={image.src}
              alt={`${index + 1}`}
              className="object-cover w-full h-[300px] md:h-[500px]"
              onLoad={() => handleImageLoad(index)} // Handle loading
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
            onLoad={() => handleImageLoad(0)} // Handle loading
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
