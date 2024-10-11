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
          <div className="flex justify-center mb-4 mt-8 lg:mt-28   ">
            <div className="items-center mt-6 w-[500px] h-[300px] md:w-[500px] md:h-[500px] overflow-hidden rounded-md z-0">
              <Map />
            </div>
          </div>
        </div>
        {/* <br />
        <br />
        <br /> */}
        <div className="  text-center">
          Copyright &copy;2024 ; Developed by Team
        </div>
        <br />
      </footer>
    </>
  );
};
export default Footer;
