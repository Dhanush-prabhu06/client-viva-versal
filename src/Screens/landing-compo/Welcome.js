import React from "react";
import "../../assets/styleImports.css";
import calmImage from "../../assets/welcome/forest.png";
import relaxImg from "../../assets/welcome/sunbathing.png";

const Welcome = () => {
  return (
    <div className=" lg:flex ">
      <div className="lg:w-10/12">
        {/* pl */}
        <div className=" items-center">
          <h1
            className=" uppercase text-green-700 pl-4 tracking-widest"
            style={{ wordSpacing: "2px" }}
          >
            WELCOME TO VIVA FERNLEAF
          </h1>
        </div>
        <br />
        <div className=" title text-4xl text-gray-800 px-2">
          Step into a world of luxury and tranquility
        </div>
        <br />
        <div className=" justify-between flex">
          <div className=" text-base text-center md:text-left text-wrap text-gray-600 px-2">
            <p>
              Nestled in a lush, green environment, New Viva Fernleaf Resort is
              your sanctuary of calm. Enjoy the perfect blend of natural beauty
              and contemporary comfort in our elegantly designed rooms. Start
              your day with the soothing sounds of nature, unwind on your
              private balcony, or take a leisurely stroll through our gardens.
              Whether you seek a quiet escape or a place to reconnect, our
              resort offers a serene setting for a truly refreshing experience.
            </p>
          </div>
        </div>
        <br />

        <div className="  w-full flex-wrap grid grid-rows-1 grid-flow-col justify-center gap-6 pl-[1.5vw]  md:pl-1">
          <div className=" w-44 h-[265px] flex items-center flex-col md:ml-[-4vh] md:mr-[10vw] ">
            <img className=" w-24 h-24 " src={calmImage} alt="" />
            <p className=" text-3xl text-center font-bold mini-tital ">
              Reconnect with Nature
            </p>
            <p className=" text-base text-gray-600 pt-2 text-wrap text-center ">
              Embrace the serene beauty of our lush surroundings
            </p>
          </div>

          <div className=" w-44 h-[265px] items-center  flex flex-col">
            <img className=" w-24 h-24 pb-1 pt-[-2]" src={relaxImg} alt="" />
            <p className=" text-3xl font-bold text-center mini-tital pt-[-5px] ">
              Classy Facilities
            </p>
            <p className=" text-center  text-gray-600 pt-2 ">
              Pamper yourself with a range of relaxing amenities
            </p>
          </div>
        </div>
      </div>
      <div className="md:max-lg:flex animation">
        <img
          src="https://www.wordpress.codeinsolution.com/royalea/wp-content/uploads/sites/41/2023/12/umbrella-and-chair-around-outdoor-swimming-pool-in-hotel-resort-e1704270008743.jpg"
          alt=".."
          className=" px-[10px] w-full object-cover "
        />
      </div>
    </div>
  );
};

export default Welcome;
