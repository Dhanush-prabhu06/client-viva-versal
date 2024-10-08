import React, { useState } from "react";
import {
  FaRegSnowflake,
  FaWifi,
  FaTableTennis,
  FaChess,
  FaBicycle,
} from "react-icons/fa";
import { GiKnifeFork, GiShuttlecock, GiBowArrow } from "react-icons/gi";
import { FaMountainSun } from "react-icons/fa6";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { IoBedOutline, IoCarSport } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoMdBonfire } from "react-icons/io";
import { ImAidKit } from "react-icons/im";
import { MdSportsCricket } from "react-icons/md";
import "../../assets/styleImports.css";

const Facilities = () => {
  const [popup, setPopup] = useState({ isOpen: false, image: "" });

  const cards = [
    {
      icon: (
        <IoBedOutline className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-900" />
      ),
      title: "Room Service",
      image:
        "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC2%2FIMG_5755.webp?alt=media&token=39aea903-72d9-45d8-a5da-6a2974e32151",
    },
    {
      icon: (
        <GiKnifeFork className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-green-700" />
      ),
      title: "Restaurant",
      image:
        "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/welcome%2FIMG_5774.webp?alt=media&token=8a119872-ea54-4820-8344-8e1f8e996342",
    },
    {
      icon: (
        <LiaSwimmingPoolSolid className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-900" />
      ),
      title: "Pool",
      image:
        "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5723.webp?alt=media&token=286e344a-4ad6-4732-b0b5-3179daca541e",
    },
    {
      icon: (
        <FaWifi className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Fiber Wifi",
      image: "https://via.placeholder.com/300?text=Wifi",
    },
    {
      icon: (
        <IoCarSport className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Parking Space",
      image: "https://via.placeholder.com/300?text=Parking",
    },
    {
      icon: (
        <FaRegSnowflake className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Air Conditioner",
      image: "https://via.placeholder.com/300?text=Air+Conditioner",
    },
    {
      icon: (
        <RiCustomerServiceFill className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Service",
      image: "https://via.placeholder.com/300?text=Service",
    },
    {
      icon: (
        <FaMountainSun className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Hill Station",
      image: "https://via.placeholder.com/300?text=Hill+Station",
    },
    {
      icon: (
        <FaTableTennis className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Table Tennis",
      image: "https://via.placeholder.com/300?text=Table+Tennis",
    },
    {
      icon: (
        <GiShuttlecock className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Badminton",
      image: "https://via.placeholder.com/300?text=Badminton",
    },
    {
      icon: (
        <FaChess className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Chess",
      image: "https://via.placeholder.com/300?text=Chess",
    },
    {
      icon: (
        <GiBowArrow className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Archery",
      image: "https://via.placeholder.com/300?text=Archery",
    },
    {
      icon: (
        <IoMdBonfire className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Bonfire",
      image: "https://via.placeholder.com/300?text=Bonfire",
    },
    {
      icon: (
        <ImAidKit className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-green-700" />
      ),
      title: "Health Care",
      image: "https://via.placeholder.com/300?text=Health+Care",
    },
    {
      icon: (
        <MdSportsCricket className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Cricket",
      image: "https://via.placeholder.com/300?text=Cricket",
    },
    {
      icon: (
        <FaBicycle className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Road Cycle",
      image: "https://via.placeholder.com/300?text=Road+Cycle",
    },
  ];

  const openPopup = (image) => {
    setPopup({ isOpen: true, image });
  };

  const closePopup = () => {
    setPopup({ isOpen: false, image: "" });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-6">
        <p className="tracking-widest uppercase text-green-700 mb-0.2">
          Our Facilities
        </p>
        <h2 className="title text-2xl text-gray-800">Our Resort Facilities</h2>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6 md:gap-8 lg:gap-12 mx-auto">
        {cards.map((card, index) => (
          <div
            className="flex flex-col items-center justify-center bg-white border p-2 sm:p-4 shadow-md rounded-lg"
            key={index}
          >
            <div
              className="cursor-pointer"
              onClick={() => openPopup(card.image)}
            >
              {card.icon}
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                openPopup(card.image);
              }}
              className="text-xs sm:text-sm md:text-lg font-medium text-gray-700"
            >
              {card.title}
            </a>
          </div>
        ))}
      </div>

      {/* Popup */}
      {popup.isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-2 rounded-lg relative">
            <button
              onClick={closePopup}
              className="absolute top-[-10px]  right-1 text-red-600 text-6xl "
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              &times; {/* Close icon */}
            </button>
            <img
              src={popup.image}
              alt="Facility"
              className="max-w-full max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Facilities;
