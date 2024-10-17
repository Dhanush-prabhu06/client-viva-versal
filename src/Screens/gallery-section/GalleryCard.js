import React from "react";

const GalleryCard = ({ title, backgroundImage, onClick }) => {
  return (
    <div
      className="relative w-full lg:h-[30rem] h-96 mx-4 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
      onClick={onClick}
    >
      {/* Render the image inside an img tag with object-cover and object-center */}
      <img
        src={backgroundImage}
        alt={title}
        className="w-full h-full object-cover object-center rounded-lg"
      />

      {/* Slight overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex justify-center items-center">
        <h2 className="text-white text-2xl font-bold px-4 py-2 rounded-lg">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default GalleryCard;
