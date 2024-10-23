import React, { useRef, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router for navigation
import "../../assets/styleImports.css"; // Assuming external styles

const GalleryPreview = () => {
  const navigate = useNavigate();
  const rooms = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5723.webp?alt=media&token=286e344a-4ad6-4732-b0b5-3179daca541e",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5779.webp?alt=media&token=ec7ef6e5-76e0-48dc-9eb7-8bcf4cfec0cd",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC1%2FIMG_5736.webp?alt=media&token=7ffd50fc-be12-41c5-bc47-957eba9b66fc",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5708.webp?alt=media&token=fee9eb99-2026-43ee-9e92-9f237188f1bc", // Background image for the "View More" card
      isViewMore: true, // Flag to identify the View More card
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const totalItems = rooms.length;

  // State to handle swipe hint visibility
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  // Move carousel programmatically
  const moveCarousel = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = totalItems - 1;
    if (newIndex >= totalItems) newIndex = 0;
    setCurrentIndex(newIndex);

    // Scroll to the new position
    const carousel = carouselRef.current;
    const cardWidth = carousel.offsetWidth;
    carousel.scrollTo({
      left: cardWidth * newIndex,
      behavior: "smooth",
    });
  };

  // Handle the View More button click
  const handleViewMoreClick = () => {
    navigate("/gallery"); // Redirect to gallery page
  };

  // Update current index based on scroll position
  const handleScroll = useCallback(() => {
    const carousel = carouselRef.current;
    const cardWidth = carousel.offsetWidth;
    const scrollLeft = carousel.scrollLeft;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(newIndex);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      // Auto-scroll slightly to hint that the carousel is scrollable
      setTimeout(() => {
        carousel.scrollTo({
          left: carousel.offsetWidth * 0.2,
          behavior: "smooth",
        });
      }, 1000); // Delay before auto-scroll
    }

    const hintTimeout = setTimeout(() => setShowSwipeHint(false), 3000); // Hide swipe hint after 3 seconds

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
      clearTimeout(hintTimeout);
    };
  }, [handleScroll]);

  return (
    <div className="relative w-full mt-3 md:mt-10">
      {/* Swipe hint overlay */}
      {showSwipeHint && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <span className="text-white text-xl">Swipe to view more</span>
        </div>
      )}

      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-base tracking-widest text-green-700 pb-2">
          EXPLORE OUR SPACES
        </h1>
        <h2 className="text-2xl lg:text-4xl title text-gray-800 pb-4">
          PREVIEW OUR RESORT'S BEAUTY
        </h2>
      </div>

      {/* Mobile Carousel */}
      <div className="block md:hidden">
        {/* New Navigation Section */}
        <div className="relative flex items-center justify-between mb-4">
          {/* Left Arrow */}
          <button
            onClick={() => moveCarousel(-1)}
            className="absolute left-0 transform translate-x-4 text-green-700 text-5xl animate-bounce-left"
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
            className="absolute right-0 transform -translate-x-4 text-green-700 text-5xl animate-bounce-right"
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
              {room.isViewMore ? (
                <div
                  // Div to adjust the view more mobile section
                  className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden cursor-pointer h-auto"
                  onClick={handleViewMoreClick}
                  style={{
                    backgroundImage: `url(${room.img})`,
                    height: "28rem", // Adjusted height
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    {/* Circular Button */}
                    <div className="bg-slate-200 rounded-full p-4 shadow-lg cursor-pointer">
                      <span className="text-gray-800 text-xl font-bold">
                        View More
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  style={{ height: "28rem" }} // Adjusted card height
                >
                  <img
                    src={room.img}
                    alt={`Room ${index + 1}`}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop and Tablet Static Cards */}
      <div className="hidden md:flex justify-center ">
        {rooms.map((room, index) => (
          <div key={index} className="w-1/3 p-2">
            {room.isViewMore ? (
              <div
                className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden cursor-pointer"
                onClick={handleViewMoreClick}
                style={{
                  backgroundImage: `url(${room.img})`,
                  height: "30.4rem", // Adjusted height for desktop
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  {/* Circular Button */}
                  <div className="bg-slate-200  rounded-full p-4 shadow-lg cursor-pointer">
                    <span className="text-gray-800 text-xl font-bold">
                      View More
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                style={{ height: "30.4rem" }} // Adjusted card height
              >
                <img
                  src={room.img}
                  alt={`Room ${index + 1}`}
                  className="object-cover object-center w-full h-full"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPreview;
