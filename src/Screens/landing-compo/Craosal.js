import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";

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
  const [loading, setLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchMove, setTouchMove] = useState(null);

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
      moveCarousel(1); // Move to the next slide every 3.5 seconds
    }, 3500);

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, [isTransitioning]);

  const handleImageLoad = () => {
    setLoading(false);
  };

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
          <LazyLoad height={200} offset={100}>
            <div className="relative">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={images[totalImages - 1].src}
                alt={`${totalImages}`}
                className="object-cover w-full h-[300px] md:h-[500px]"
                onLoad={handleImageLoad}
              />
            </div>
          </LazyLoad>
        </div>

        {images.map((image, index) => (
          <div key={index} className="flex-none w-full">
            <LazyLoad height={200} offset={100}>
              <div className="relative">
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={image.src}
                  alt={`${index + 1}`}
                  className="object-cover w-full h-[300px] md:h-[500px]"
                  onLoad={handleImageLoad}
                  loading="lazy"
                />
              </div>
            </LazyLoad>
          </div>
        ))}

        {/* Cloned first image */}
        <div className="flex-none w-full">
          <LazyLoad height={200} offset={100}>
            <div className="relative">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={images[0].src}
                alt="..."
                className="object-cover w-full h-[300px] md:h-[500px]"
                onLoad={handleImageLoad}
              />
            </div>
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
