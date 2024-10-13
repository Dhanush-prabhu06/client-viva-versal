import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";
import Logo from "../assets/icons/icon.png";

const Header = () => {
  const [isSideMenuOpen, setMenu] = useState(false);

  return (
    <nav className="sticky z-10 shadow-5-strong top-0 bg-slate-400 bg-opacity-30 backdrop-blur-xl ">
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
            <a href="/contact">Contact</a>
            <a href="/gallery">Gallery</a>
            <a href="/faq">FAQ</a>
            <a href="/dashboard">Dashboard</a>
          </div>

          {/* Adjusted "Book Now" button alignment */}
          <button className="bg-green-600 px-3 rounded-md shadow-5 py-1 ml-auto lg:ml-24 mr-7">
            <a href="/booking">Book Now</a>
          </button>

          {/* Menu Icon */}
          <FiMenu
            onClick={() => setMenu(true)}
            className="text-3xl cursor-pointer lg:hidden"
          />
        </div>
      </div>

      {/* Side menu */}
      <div
        className={clsx(
          "lg:hidden fixed inset-y-0 left-0 z-50 w-40 bg-black/50 backdrop-blur-sm transition-transform duration-200",
          {
            "translate-x-0": isSideMenuOpen,
            "-translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <div className="flex justify-between h-16 px-4 py-4 bg-white">
          <IoCloseOutline
            onClick={() => setMenu(false)}
            className="text-3xl cursor-pointer"
          />
        </div>
        <div className="flex flex-col px-4 py-2 space-y-2 bg-white w-40 h-screen">
          <a href="/" className="text-gray-900">
            Home
          </a>
          <a href="/contact" className="text-gray-900">
            Contact
          </a>
          <a href="/gallery" className="text-gray-900">
            Gallery
          </a>
          <a href="/faq" className="text-gray-900">
            FAQ
          </a>
          <a href="/dashboard" className="text-gray-900">
            Dashboard
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
