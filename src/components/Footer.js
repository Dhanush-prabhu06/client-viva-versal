import React from "react";
import Map from "../map-dir/map";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="text-white bg-black md:text-xl text-sm h-auto">
        <div className="md:flex flex-row justify-evenly text-white bg-black md:text-xl text-sm h-auto">
          {/* Contact Info and Social Links Section */}
          <div className="flex flex-col justify-evenly md:space-y-4 space-y-6 ">
            <div className="flex flex-row md:justify-evenly w-[100%] space-x-28 mt-20 justify-center">
              <div className="flex flex-col space-y-2">
                <div>Reservation</div>
                <div>+91 98860 09778</div>
                <div>@support.com</div>
              </div>
              <div className="flex flex-col space-y-2">
                <div>Our Phone</div>
                <div>+91 98860 09778</div>
              </div>
            </div>
            <div className="flex flex-row md:justify-start w-[100%] space-x-28 justify-center">
              <div className="flex flex-col space-y-2">
                <div>Our Phone</div>
                <div>+91 98860 09778</div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="mr-12">Follow Us</div>
                <div className="flex flex-row justify-evenly space-x-2 mr-12">
                  <a href="/" className="hover:text-yellow-300 ">
                    <FaFacebook />
                  </a>
                  <a href="/" className=" hover:text-yellow-300">
                    <FaInstagram />
                  </a>
                  <a href="/" className=" hover:text-yellow-300">
                    <RiYoutubeLine />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Direction Button Section */}
          <div className="flex flex-col items-center mb-4 mt-8 lg:mt-28">
            <button
              className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:from-teal-400 hover:to-blue-500 hover:shadow-xl transition duration-300 ease-in-out mb-6 lg:mb-8"
              onClick={() => {
                const destinationLatitude = 13.344513;
                const destinationLongitude = 77.181013;
                const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationLatitude},${destinationLongitude}`;
                window.open(googleMapsUrl, "_blank");
              }}
            >
              Get Directions to Our Resort
            </button>
            <div className="w-full h-full lg:w-[500px] lg:h-[500px] overflow-hidden rounded-xl z-0 px-1">
              <Map />
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <br />
        <div className="text-center">
          Copyright &copy;2024 ; Developed by Team
        </div>
        <br />
      </footer>
    </>
  );
};

export default Footer;
