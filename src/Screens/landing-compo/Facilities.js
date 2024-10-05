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

import KidPlay from "../../assets/facilitiesImg/playground.png";

import "./styleImports.css";

const Facilities = () => {
  const [cards] = useState([
    {
      icon: (
        <IoBedOutline className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-900" />
      ),
      title: "Room Service",
    },
    {
      icon: (
        <GiKnifeFork className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-green-700" />
      ),
      title: "Restaurant",
    },
    {
      icon: (
        <LiaSwimmingPoolSolid className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-900" />
      ),
      title: "Pool",
    },
    {
      icon: (
        <FaWifi className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Fiber Wifi",
    },
    {
      icon: (
        <IoCarSport className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Parking Space",
    },
    {
      icon: (
        <FaRegSnowflake className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Air Conditioner",
    },

    {
      icon: (
        <RiCustomerServiceFill className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Service",
    },
    {
      icon: (
        <FaMountainSun className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Hill Station",
    },
    {
      icon: (
        <FaTableTennis className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Table Tennis",
    },
    {
      icon: (
        <GiShuttlecock className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Badmiton",
    },
    {
      icon: (
        <FaChess className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Chess",
    },
    {
      icon: (
        <GiBowArrow className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Archary",
    },
    {
      icon: (
        <IoMdBonfire className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Bonfire",
    },
    {
      icon: (
        <ImAidKit className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-green-700" />
      ),
      title: "Health Care",
    },
    {
      icon: (
        <MdSportsCricket className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Cricket",
    },
    {
      icon: (
        <FaBicycle className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Roap Cycle",
    },
    {
      icon: (
        <LiaSwimmingPoolSolid className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Pool",
    },
    {
      icon: (
        <LiaSwimmingPoolSolid className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Pool",
    },
    {
      icon: (
        <LiaSwimmingPoolSolid className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Pool",
    },
    {
      icon: (
        <LiaSwimmingPoolSolid className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Pool",
    },
    {
      icon: (
        <LiaSwimmingPoolSolid className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800" />
      ),
      title: "Pool",
    },
  ]);

  return (
    <div className="flex flex-col items-center">
      {/* Title and description */}
      <div className="text-center mb-6">
        <p className="tracking-widest uppercase text-green-700 mb-0.2">
          Our Facilities
        </p>
        <h2 className="text-2xl text-gray-800">Our Resort Facilities</h2>
      </div>

      {/* Cards grid */}
      <div
        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
      gap-5 sm:gap-6 md:gap-8 lg:gap-12 mx-auto"
      >
        {cards.map((card, index) => (
          <div
            className="flex flex-col items-center justify-center bg-white border p-2 sm:p-4 shadow-md rounded-lg"
            key={index}
          >
            {card.icon}
            <p className="text-xs sm:text-sm md:text-lg font-medium text-gray-700">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
