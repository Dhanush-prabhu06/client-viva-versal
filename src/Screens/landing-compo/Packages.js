import React, { useRef, useState, useEffect, useCallback } from "react";
import "../../assets/styleImports.css"; // Assuming external styles

const Packages = () => {
  const rooms = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/rooms%2FIMG_5755.webp?alt=media&token=f081b5c3-da63-4792-bf7a-3d1d25db3dcc",
      title: "AC Rooms",
      price: "₹3799 Per Stay | Per Pair",
      link: "/roomDetails/AcRooms",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/rooms%2FIMG_5730.webp?alt=media&token=ec0ccdb2-afb9-4663-8b04-c60c9d3d9202",
      title: "Non-AC Room",
      price: "₹2999 Per Night | Per Pair",
      link: "/roomDetails/Non-Ac-rooms",
    },
    {
      img: "https://media.istockphoto.com/id/1136247293/photo/child-with-mother-in-swimming-pool-holiday-resort.jpg?s=612x612&w=0&k=20&c=zAFudOmgoSbmvitRn-Xi1h1hyvhUyjF-OWWpkFidPS0=",
      title: "Dayout package",
      price: "₹899 per person",
      link: "/roomDetails/Dayout-package",
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
    // Delay by setting a slower transition duration
    carousel.style.transition = "scroll 1s ease"; // 1 second scroll delay
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
    }, 200); // 100ms debounce delay
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
        <h2 className="text-2xl lg:text-4xl title text-gray-800 pb-4">
          ROOMS AND PACKAGES
        </h2>
      </div>

      {/* Mobile Carousel */}
      <div className="block md:hidden">
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
                    className="bg-green-700 px-2 py-1 mt-2 inline-block rounded-sm "
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
      <div className="hidden md:flex justify-center ">
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
                  className="bg-green-700 px-2 py-1 mt-2 inline-block rounded-sm"
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
