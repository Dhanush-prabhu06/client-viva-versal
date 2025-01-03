import React, { useRef, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router for navigation
import "../../assets/styleImports.css";

const NonAcRooms = () => {
  const navigate = useNavigate();

  const RoomspPhotos = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC1%2FIMG_5730.webp?alt=media&token=75952d2d-ca3f-4e70-857a-42361ebab9f7",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC2%2FIMG_5755.webp?alt=media&token=39aea903-72d9-45d8-a5da-6a2974e32151",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC1%2FIMG_5736.webp?alt=media&token=7ffd50fc-be12-41c5-bc47-957eba9b66fc",
    },
    // The "View More" card
    {
      img: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC2%2FIMG_5751.webp?alt=media&token=b3316e41-e492-46d9-b47e-7f45761e714a", // Background image for the "View More" card
      isViewMore: true, // Flag to identify the View More card
    },
  ];

  const amenities = [
    { icon: "🌄", text: "Balcony with Mountain View" },
    { icon: "🛏️", text: "King Size Bed" },
    { icon: "📺", text: "4K LED high-definition TV" },
    { icon: "📶", text: "Free WIFI (Unlimited)" },
    { icon: "🔒", text: "In Room Safe" },
    { icon: "👗", text: "Wardrobe" },
    { icon: "🛁", text: "Private Bath Room" },
    { icon: "💧", text: "Hot & Cold Water" },
    { icon: "🧺", text: "Laundry Service" },
    { icon: "🧗", text: "Rope Activity" },
    { icon: "🏊", text: "Swimming Pool" },
  ];

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const carouselRef1 = useRef(null);
  const totalItems1 = RoomspPhotos.length;

  // Move carousel programmatically
  const moveCarousel1 = (direction) => {
    let newIndex = currentIndex1 + direction;
    if (newIndex < 0) newIndex = totalItems1 - 1;
    if (newIndex >= totalItems1) newIndex = 0;
    setCurrentIndex1(newIndex);
    const carousel = carouselRef1.current;
    const cardWidth = carousel.clientWidth;
    carousel.scrollTo({
      left: cardWidth * newIndex,
      behavior: "smooth",
    });
  };

  // Handle the View More button click
  const handleViewMoreClick1 = () => {
    navigate("/gallery/RoomsPhotos"); // Redirect to gallery page
  };

  // Handle scroll for updating current index
  const debounceTimer1 = useRef(null);

  const handleScroll1 = useCallback(() => {
    const carousel = carouselRef1.current;
    const cardWidth = carousel.clientWidth;
    const scrollLeft = carousel.scrollLeft;
    const newIndex = Math.round(scrollLeft / cardWidth);

    if (debounceTimer1.current) {
      clearTimeout(debounceTimer1.current);
    }

    debounceTimer1.current = setTimeout(() => {
      if (Math.abs(newIndex - currentIndex1) > 0) {
        setCurrentIndex1(newIndex);
      }
    }, 200); // 200ms debounce delay
  }, [currentIndex1]);

  useEffect(() => {
    const carousel = carouselRef1.current;

    if (carousel) {
      carousel.addEventListener("scroll", handleScroll1);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll1);
      }
      if (debounceTimer1.current) {
        clearTimeout(debounceTimer1.current);
      }
    };
  }, [handleScroll1]);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const rooms = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/rooms%2FIMG_5755.webp?alt=media&token=f081b5c3-da63-4792-bf7a-3d1d25db3dcc",
      title: "AC Rooms",
      price: "₹3799 Per Stay | Per Pair",
      link: "/roomDetails/AcRooms",
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
    <>
      <section>
        <div className=" relative mx-auto">
          <img
            src="https://i.pinimg.com/originals/bc/5b/78/bc5b780990cd800137855a5b7f121156.jpg"
            className=" w-full object-cover overflow-x-hidden"
            alt="..."
          />
          <div class="absolute inset-0  bg-gray-700  opacity-60 rounded-md"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <h2 class="text-white text-5xl font-serif">
              Room Details
              <br />
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="p-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:mx-[10%] border-b border-gray-200 pb-4 md:pb-6 space-y-4 md:space-y-0">
            {/* Left Side (Room Info) */}
            <div className="space-y-2 md:w-2/3">
              {" "}
              {/* Adjusted width */}
              <h2 className="text-2xl md:text-3xl font-semibold">
                Non-AC Rooms
              </h2>
              {/* Room Specs */}
              <div className="flex space-x-4 text-gray-500 text-sm md:text-base">
                <p>Max. 4 guests per room</p>
              </div>
            </div>

            {/* Right Side (Price with Gradient) */}
            <div className="mt-4 md:mt-0 md:w-1/3 md:text-right">
              <p className="text-2xl md:text-3xl bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                ₹2999
                <span className="text-lg md:text-xl">
                  /Per Night | Per Pair
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center my-4">
          <h1 className="text-base tracking-widest text-green-700 pb-2">
            EXPLORE OUR Non-AC Rooms
          </h1>
          <h2 className="text-2xl lg:text-4xl title text-gray-800 pb-4">
            PREVIEW OUR ROOMS BEAUTY
          </h2>
        </div>
        <div className="relative w-full mt-0  md:mt-0">
          {/* Mobile Carousel */}
          <div className="block md:hidden">
            {/* New Navigation Section */}
            <div className="relative flex items-center justify-between mb-4">
              {/* Left Arrow */}
              <button
                onClick={() => moveCarousel1(-1)}
                className="absolute left-0 transform translate-x-4 text-green-700 text-5xl"
              >
                &#8592;
              </button>

              {/* Current Index and Total */}
              <span className="mx-auto text-lg text-gray-800">
                {currentIndex1 + 1}/{totalItems1}
              </span>

              {/* Right Arrow */}
              <button
                onClick={() => moveCarousel1(1)}
                className="absolute right-0 transform -translate-x-4 text-green-700 text-5xl"
              >
                &#8594;
              </button>
            </div>

            {/* Carousel Section */}
            <div
              ref={carouselRef1}
              className="flex transition-all duration-300"
              style={{
                scrollSnapType: "x mandatory",
                overflowX: "scroll",
                scrollBehavior: "smooth",
              }}
            >
              {RoomspPhotos.map((room, index) => (
                <div
                  key={index}
                  className="flex-none w-full p-2"
                  style={{ scrollSnapAlign: "start" }}
                >
                  {room.isViewMore ? (
                    <div
                      // Div to adjest the view more mobile section
                      className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden cursor-pointer h-auto"
                      onClick={handleViewMoreClick1}
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
                      // Div to adjest the height of image in the mobile view
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
            {RoomspPhotos.map((room, index) => (
              <div key={index} className="w-1/3 p-2">
                {room.isViewMore ? (
                  <div
                    className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden cursor-pointer"
                    onClick={handleViewMoreClick1}
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
      </section>

      <section className="py-10 flex justify-center px-5">
        <div className="w-full max-w-5xl">
          <h2 className="text-2xl font-bold text-center mb-8">
            Cottage Amenities
          </h2>
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="text-green-600 text-2xl">{amenity.icon}</div>
                <span className="text-lg font-medium">{amenity.text}</span>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="text-green-600 text-2xl">{amenity.icon}</div>
                <span className="text-lg font-medium">{amenity.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="p-8 mb-10 max-w-lg md:max-w-2xl lg:max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-center text-gray-800 tracking-tight">
            Important Information
          </h2>

          {/* Flex container for the 3 sections */}
          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-8 lg:space-x-12">
            {/* Check-in/Check-out */}
            <div className="p-6 bg-white rounded-lg shadow-md flex-1 border-l-4 border-blue-400 transition-transform transform hover:scale-105">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-blue-600">
                Check-in/Check-out Times
              </h3>
              <ul className="list-disc list-inside text-gray-700 ml-4 lg:ml-6">
                <li>1 PM to 11 AM</li>
                <li>6 PM to 3 PM</li>
              </ul>
            </div>

            {/* Dining Information */}
            <div className="p-6 bg-white rounded-lg shadow-md flex-1 border-l-4 border-green-400 transition-transform transform hover:scale-105">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-green-600">
                Dining Information
              </h3>
              <ul className="list-disc list-inside text-gray-700 ml-4 lg:ml-6">
                <li>
                  <b>Breakfast:</b> Free
                </li>
                <li>
                  <b>Lunch and Dinner:</b> Available as per menu
                </li>
              </ul>
            </div>
            {/* Additional Benefits */}
            <div className="p-6 bg-white rounded-lg shadow-md flex-1 border-l-4 border-yellow-400 transition-transform transform hover:scale-105">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-yellow-600">
                Additional Information
              </h3>
              <ul className="list-disc list-inside text-gray-700 ml-4 lg:ml-6">
                <li>
                  An extra bed can be arranged upon request, providing access to
                  all standard amenities for each additional guest
                </li>
              </ul>
            </div>
          </div>

          {/* View Menu Button */}
          <div className="mt-16 text-center">
            <a
              href="/menu" // Update with the actual link to your PDF
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white text-lg font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-teal-500 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-opacity-50"
            >
              View Food Menu
            </a>
          </div>
        </div>
      </section>

      <section>
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
                        className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 mt-2 inline-block rounded-sm "
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
          <div className="hidden md:flex justify-center gap-[10%]">
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
                      className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 mt-2 inline-block rounded-sm"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NonAcRooms;
