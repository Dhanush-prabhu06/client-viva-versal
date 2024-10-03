import React from "react";
import { FaRegSnowflake } from "react-icons/fa";
import { CiWifiOn } from "react-icons/ci";
import { TbBath } from "react-icons/tb";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

import { useState, useEffect } from "react";
// import {useRef} from 'react'

const images = [
  {
    src: "https://www.wordpress.codeinsolution.com/royalea/wp-content/uploads/sites/41/2023/12/luxury-bathroom-design-e1704271632648.jpg",
  },
  {
    src: "https://www.wordpress.codeinsolution.com/royalea/wp-content/uploads/sites/41/2023/12/luxury-room-design-e1704271663510.jpg",
  },
  {
    src: "https://www.wordpress.codeinsolution.com/royalea/wp-content/uploads/sites/41/2023/12/3d-rendering-modern-luxury-bedroom-suite-and-bathroom-2-e1704269779310.jpg",
  },
  {
    src: "https://cache.marriott.com/marriottassets/marriott/KULDT/kuldt-guestroom-0017-hor-clsc.jpg?interpolation=progressive-bilinear&",
  },
];

const Roomscomp = () => {
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

const RoomDetails = () => {
  return (
    <div className="">
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
      <div className="mt-10  text-center mb-5">
        <p className=" text-5xl  pl-10 text">Comfort Room </p>
      </div>
      <Roomscomp />
      <div className="mt-10">
        <p className=" text-5xl  pl-10 ">Comfort Room </p>
      </div>
      <br />
      <div className=" flex flex-wrap">
        <div className=" pl-10 flex flex-wrap">
          <RiStarSFill className=" mt-3 text-yellow-500 w-5 h-5" />
          <RiStarSFill className=" mt-3 text-yellow-500  w-5 h-5 " />
          <RiStarSFill className=" mt-3 text-yellow-500  w-5 h-5" />
          <RiStarSFill className=" mt-3 text-yellow-500  w-5 h-5" />
          <RiStarSFill className=" mt-3 text-yellow-500  w-5 h-5" />
        </div>
        <p className=" mt-3 pl-4 text-lg">4,5 review</p>
        <p className=" mt-3 px-10 text-lg">Space: 306 sqm</p>
        <p className=" mt-3 px-10 text-lg">Max. 4 guests</p>
        <p className=" mt-3 px-10 text-3xl text-yellow-700 font-serif">
          $ 89 /Per Night
        </p>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <div className=" pl-10 text-wrap grid lg:grid-cols-1">
        <p className=" w-2/3">
          {" "}
          Step into the luxurious comfort room of our resort and embark on a
          journey of relaxation and indulgence unlike any other. Designed with
          meticulous attention to detail and adorned with opulent furnishings,
          our comfort rooms redefine the concept of luxury and tranquility.
          Indulge in unparalleled luxury and sophistication at our resort, where
          every moment is infused with opulence and elegance. Experience the
          epitome of comfort and hospitality as you create unforgettable
          memories in our exquisite comfort rooms. As you revel in the
          tranquility of your surroundings, take in the breathtaking views of
          our lush landscapes or pristine beaches, depending on the resort's
          location. Whether you seek a romantic getaway, a family retreat, or a
          solo adventure, our comfort rooms provide the perfect sanctuary for
          your ultimate relaxation.
        </p>
      </div>
      <br />
      <div className=" grid grid-col-2 lg:grid-cols-2">
        <div>
          <div className=" grid grid-col-1 lg:grid-cols-1">
            <div className=" pl-10 pr-10 ">
              <p className=" text-5xl mt-5">Room Overview</p>
              <div className=" w-full">
                <p className=" text-base text-wrap mt-4 w-2/3">
                  {" "}
                  Welcome to our charming and inviting retreat! Our room offers
                  a perfect blend of comfort and style, providing a serene
                  sanctuary for your stay. Step into a space adorned with
                  tasteful decor and thoughtful touches, designed to create an
                  ambiance of relaxation and rejuvenation. Unwind in our cozy
                  bed, complete with luxurious linens and plush pillows,
                  ensuring a restful night's sleep. Wake up to stunning views of
                  [location], filling the room with natural light and warmth.
                  Our room is equipped with modern amenities, including [list
                  amenities such as a flat-screen TV, Wi-Fi, air conditioning,
                  etc.], to ensure a seamless and enjoyable stay. Whether you're
                  here for business or leisure, our room offers the perfect
                  retreat after a day of exploring [destination]. Come
                  experience comfort and tranquility like never before in our
                  room overview.
                </p>
              </div>
            </div>
            <br />
            <br />
          </div>
          <br />
          <br />
          <div className=" pl-10">
            <p className=" text-3xl font-semibold">Amenities</p>
            <br />
          </div>
          <br />
          <div className="">
            <div className=" grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 mx-auto justify-center items-center pl-[100px] ">
              <div className=" w-44 h-44  flex flex-col items-center">
                <FaRegSnowflake className=" w-14 h-14 rounded-full " />
                <br />
                <p className=" text-xl">Air conditioned</p>
              </div>
              <div className=" w-44 h-44  flex flex-col items-center px-10">
                <CiWifiOn className=" w-14 h-14 rounded-full text-yellow-600 " />
                <br />
                <p className=" text-xl">Free Wifi</p>
              </div>
              <div className=" w-44 h-44 flex flex-col items-center">
                <TbBath className=" w-14 h-14 rounded-full " />
                <br />
                <p className=" text-xl">Bath Tub</p>
              </div>
              <div className=" w-44 h-44  flex flex-col items-center">
                <PiTelevisionSimpleBold className=" w-14 h-14 rounded-full text-yellow-600" />
                <br />
                <p className=" text-xl">Smart TV</p>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <div className=" text-3xl font-semibold pl-10">Room Rules</div>
          <br />
          <div className=" grid lg:grid-cols-2">
            <div className=" mb-12 p-11 min-w-96 min-h-80 flex flex-col ">
              <div className="flex">
                <div>
                  <p className=" text-black font-semibold text-2xl">
                    Check-in{" "}
                  </p>
                </div>
              </div>

              <br />

              <div className="flex">
                <div>
                  <TiTick className=" text-yellow-500 w-8 h-8" />
                </div>
                <div>
                  <p className=" text-xl">Check-in from 9:00 AM - anytime</p>
                </div>
              </div>

              <br />

              <div className="flex">
                <div>
                  <TiTick className="  text-yellow-500 w-8 h-8" />
                </div>
                <div>
                  <p className=" text-xl">
                    Early check-in subject to availability
                  </p>
                </div>
              </div>

              <br />

              <div className="flex">
                <div>
                  <TiTick className="  text-yellow-500 w-8 h-8" />
                </div>
                <div>
                  <p className=" text-xl">Minimum check-in age - 18</p>
                </div>
              </div>

              <br />
            </div>
            <div className=" mb-12 p-11 min-w-96 min-h-80 flex flex-col ">
              <p className=" text-black font-semibold text-2xl">Check-out </p>
              <br />
              <div className="flex">
                <div>
                  <TiTick className="  text-yellow-500 w-8 h-8" />
                </div>
                <div>
                  <p className=" text-xl">Check-out from 9:00 AM - anytime</p>
                </div>
              </div>

              <br />
              <div className="flex">
                <div>
                  <TiTick className="  text-yellow-500 w-8 h-8" />
                </div>
                <div>
                  <p className=" text-xl">
                    Early check-in subject to availability
                  </p>
                </div>
              </div>

              <br />
              <div className="flex">
                <div>
                  <TiTick className="  text-yellow-500 w-8 h-8" />
                </div>
                <div>
                  <p className=" text-xl">Minimum check-in age - 18</p>
                </div>
              </div>

              <br />
            </div>
          </div>
        </div>
        <div className=" px-10 ">
          <div className=" bg-slate-100 mb-12 p-11 min-w-80 min-h-80 flex flex-col ">
            <p className=" text-black font-semibold text-2xl">Other Rooms </p>
            <br />

            <div className="flex">
              <div>
                <FaArrowAltCircleRight className=" mt-2 text-yellow-500 " />
              </div>
              <div>
                <p className=" mx-2 text-gray-400 text-xl">Luxury Rooms</p>{" "}
              </div>
            </div>

            <br />
            <div className="flex">
              <div>
                <FaArrowAltCircleRight className=" mt-2 text-yellow-500 " />
              </div>
              <div>
                <p className=" mx-2 text-gray-400 text-xl">comfort Rooms</p>{" "}
              </div>
            </div>

            <br />

            <div className="flex">
              <div>
                <FaArrowAltCircleRight className=" mt-2 text-yellow-500 " />
              </div>
              <div>
                <p className=" mx-2 text-gray-400 text-xl">Standard Rooms</p>{" "}
              </div>
            </div>

            <br />

            <div className="flex">
              <div>
                <FaArrowAltCircleRight className=" mt-2 text-yellow-500 " />
              </div>
              <div>
                <p className=" mx-2 text-gray-400 text-xl">Grand Delux Rooms</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
