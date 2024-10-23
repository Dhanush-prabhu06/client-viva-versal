import React, { useState } from "react";

const PoolAndActivitiesPhotos = () => {
  const photos = [
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5723.webp?alt=media&token=286e344a-4ad6-4732-b0b5-3179daca541e", // Replace with actual URLs
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5777.webp?alt=media&token=10ed6d0d-becc-4728-88e1-c7db8c00d2d5",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5770.webp?alt=media&token=8c90ad86-5fb9-4076-affe-15e106f564d5",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5779.webp?alt=media&token=ec7ef6e5-76e0-48dc-9eb7-8bcf4cfec0cd",
    ,
  ];

  const [loadedImages, setLoadedImages] = useState(
    new Array(photos.length).fill(false)
  );

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Pool & Activities Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg relative"
          >
            {!loadedImages[index] && (
              <div className="absolute inset-0 flex justify-center items-center bg-gray-200">
                {/* Spinner */}
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            )}
            <img
              src={photo}
              alt={`Pool and activity photos ${index + 1}`}
              className={`w-full h-full object-cover transform transition-transform duration-300 hover:scale-105 ${
                loadedImages[index] ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => handleImageLoad(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoolAndActivitiesPhotos;
