import React, { useState } from "react";
import "../../assets/styleImports.css";
import LazyLoad from "react-lazyload";

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(true); // State to track image loading

  // Image loading handler
  const handleImageLoad = () => {
    setIsLoading(false); // Set loading to false once the image is loaded
  };

  return (
    <div className="lg:flex">
      <div className="lg:w-10/12 flex flex-col justify-center items-center">
        {/* This will center the left content horizontally */}

        <div className="items-center">
          <h1
            className="uppercase text-green-700 tracking-widest"
            style={{ wordSpacing: "2px" }}
          >
            WELCOME TO NEW VIVA FERNLEAF RESORT
          </h1>
        </div>
        <br />
        <div className="title text-4xl text-gray-800 px-2">
          Step into a world of luxury and tranquility
        </div>
        <br />
        <div className="justify-between flex">
          <div className="text-base text-center md:text-left text-wrap text-gray-600 px-2">
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

        <div className="w-full flex-wrap grid grid-rows-1 grid-flow-col justify-center gap-6 pl-[1.5vw] md:pl-1">
          <div className="w-44 h-[265px] flex items-center flex-col md:ml-[-4vh] md:mr-[10vw]">
            <img
              className="w-24 h-24"
              src="https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/welcome%2Fforest.png?alt=media&token=27b304ae-1c99-49a0-8b40-47c1fca5f3cb"
              alt="Reconnect with Nature"
            />
            <p className="text-3xl text-center font-bold mini-tital">
              Reconnect with Nature
            </p>
            <p className="text-base text-gray-600 pt-2 text-wrap text-center">
              Embrace the serene beauty of our lush surroundings
            </p>
          </div>

          <div className="w-44 h-[265px] items-center flex flex-col">
            <img
              className="w-24 h-24 pb-1 pt-[-2]"
              src="https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/welcome%2Fsunbathing.png?alt=media&token=f918088b-256f-49c1-8714-f174706bf2a6"
              alt="Classy Facilities"
            />
            <p className="text-3xl font-bold text-center mini-tital pt-[-5px]">
              Classy Facilities
            </p>
            <p className="text-center text-gray-600 pt-2">
              Pamper yourself with a range of relaxing amenities
            </p>
          </div>
        </div>
      </div>

      <div className="md:max-lg:flex w-full h-auto">
        {/* Loading effect for the image */}
        {isLoading && (
          <div className="w-full h-[400px] lg:h-[750px] flex justify-center items-center">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            >
              <span className="visually-hidden"></span>
            </div>
          </div>
        )}
        <LazyLoad height={200} offset={100}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/welcome%2FIMG_5774.webp?alt=media&token=8a119872-ea54-4820-8344-8e1f8e996342"
            alt=".."
            className={`px-[10px] w-full object-cover object-center lg:h-[750px] h-[400px] pb-8 ${
              isLoading ? "hidden" : "block"
            }`}
            onLoad={handleImageLoad} // Call the handler when the image is loaded
          />
        </LazyLoad>
      </div>
    </div>
  );
};

export default Welcome;
