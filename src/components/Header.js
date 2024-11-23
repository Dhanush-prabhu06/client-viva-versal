import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";
import Logo from "../assets/icons/icon.png";

const Header = () => {
  const [isSideMenuOpen, setMenu] = useState(false);

  return (
    <nav className="sticky z-50  shadow-5-strong top-0 bg-slate-400 bg-opacity-30 backdrop-blur-xl ">
      <div className="max-w-5xl mx-auto px-1">
        <div className="flex items-center justify-between h-auto">
          <a href="/">
            <img
              src={Logo}
              className="w-7 ml-10 lg:ml-11"
              alt="Viva Fernleaf"
            />
            <span className="text-xl text-gray-900 font-semibold">
              Viva Fernleaf
            </span>
          </a>

          <div className="hidden lg:flex space-x-4 text-gray-900">
            <a href="/">Home</a>
            {/* <a href="/contact">Contact</a> */}
            <a href="/gallery">Gallery</a>

            <a
              href="/menu" // Update with the actual link to your PDF
              rel="noopener noreferrer"
            >
              Food Menu
            </a>
            <a href="/dashboard">Dashboard</a>
          </div>

          {/* "Book Now" button with gradient */}
          <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 rounded-md shadow-lg py-2 ml-auto lg:ml-24 mr-7 transition-transform hover:scale-105 hover:shadow-xl">
            <a href="/booking">Book Now</a>
          </button>

          {/* Menu Icon */}
          <FiMenu
            onClick={() => setMenu(true)}
            className="text-3xl cursor-pointer lg:hidden"
          />
        </div>
      </div>

      {/* Side menu with animations */}
      <div
        className={clsx(
          "lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-black/60 backdrop-blur-md transition-transform duration-300 ease-out shadow-lg",
          {
            "translate-x-0 opacity-100": isSideMenuOpen,
            "-translate-x-full opacity-0": !isSideMenuOpen,
          }
        )}
      >
        <div className="flex justify-between h-16 px-4 py-4 bg-white">
          <IoCloseOutline
            onClick={() => setMenu(false)}
            className="text-5xl cursor-pointer text-red-600 transition-colors duration-200"
          />
        </div>
        <div className="flex flex-col px-6 py-6 space-y-6 bg-white w-64 h-screen shadow-xl transform transition-opacity duration-300 ease-out">
          <a
            href="/"
            className="text-gray-900 text-2xl font-semibold transition-transform hover:text-teal-600 transform hover:scale-105"
          >
            Home
          </a>
          {/* <a
            href="/contact"
            className="text-gray-900 text-2xl font-semibold transition-transform hover:text-teal-600 transform hover:scale-105"
          >
            Contact
          </a> */}
          <a
            href="/gallery"
            className="text-gray-900 text-2xl font-semibold transition-transform hover:text-teal-600 transform hover:scale-105"
          >
            Gallery
          </a>

          <a
            href="/menu" // Update with the actual link to your PDF
            rel="noopener noreferrer"
            className="text-gray-900 text-2xl font-semibold transition-transform hover:text-teal-600 transform hover:scale-105"
          >
            Food Menu
          </a>

          <a
            href="/dashboard"
            className="text-gray-900 text-2xl font-semibold transition-transform hover:text-teal-600 transform hover:scale-105"
          >
            Dashboard
          </a>
        </div>
      </div>

      {/* Overlay to close the menu when clicked outside */}
      {isSideMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-30"
          onClick={() => setMenu(false)}
        />
      )}
    </nav>
  );
};

export default Header;
