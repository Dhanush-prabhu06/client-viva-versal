import React from "react";
import Map from "../map-dir/map";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <div className="hidden md:flex flex-row justify-evenly text-white bg-black text-lg">
        <div className="flex flex-col justify-evenly space-y-4">
          <div className="flex flex-row justify-evenly w-[100%] space-x-28">
            <div className="flex flex-col space-y-2">
              <div>Reservation</div>
              <div>+91-1234567890</div>
              <div>@support.com</div>
            </div>
            <div className="flex flex-col space-y-2">
              <div>Our Phone</div>
              <div>+91-1234567890</div>
            </div>
          </div>
          <div className="flex flex-row justify-start w-[100%] space-x-28">
            <div className="flex flex-col space-y-2">
              <div>Our Phone</div>
              <div>+91-1234567890</div>
            </div>
            <div className="flex flex-col space-y-2">
              <div>Follow Us</div>
              <div className="flex flex-row justify-evenly space-x-2">
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
        <div className="flex justify-center mb-4">
          <div className="items-center mt-6 w-[300px] h-[250px] md:w-[500px] md:h-[500px] overflow-hidden rounded-md">
            <Map />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-px bg-black p-6 md:flex-col md:hidden">
        <div className="flex flex-col justify-evenly text-white text-base md:flex-row md:gap-x-4 gap-y-4 mb-4">
          <div className="flex flex-col">
            <div>Reservation</div>
            <div>+91-1234567890</div>
            <div>@support.com</div>
          </div>
          <div className="flex flex-col">
            <div>Our Location</div>
            <div>Tumkur, Karnataka</div>
          </div>
          <div className="flex flex-col">
            <div>Our Phone</div>
            <div>+91-1234567890</div>
          </div>
          <div className="flex flex-col">
            <div className="space-x-2">Follow Us</div>
            <div className="flex flex-row justify-start space-x-2">
              <a href="/" className="hover:text-yellow-300">
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
        <div className="flex justify-center mb-4">
          <div className="items-center mt-6 w-[300px] h-[450px] md:w-[500px] md:h-[500px] overflow-hidden rounded-md">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
