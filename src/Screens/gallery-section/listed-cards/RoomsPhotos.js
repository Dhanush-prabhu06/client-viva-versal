import React, { useState } from "react";

const RoomsPhotos = () => {
  const photos = [
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC1%2FIMG_5730.webp?alt=media&token=75952d2d-ca3f-4e70-857a-42361ebab9f7",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC1%2FIMG_5733.webp?alt=media&token=daa2d8bc-5d24-46ea-95ec-19d087fb1298",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC1%2FIMG_5736.webp?alt=media&token=7ffd50fc-be12-41c5-bc47-957eba9b66fc",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC2%2FIMG_5755.webp?alt=media&token=39aea903-72d9-45d8-a5da-6a2974e32151",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC2%2FIMG_5751.webp?alt=media&token=b3316e41-e492-46d9-b47e-7f45761e714a",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC2%2FIMG_5764.webp?alt=media&token=a9f9804e-d90f-4e10-9df9-38b10ce4a027",
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
      <h2 className="text-2xl font-semibold mb-6 text-center">Room Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg relative"
          >
            {!loadedImages[index] && (
              <div className="absolute inset-0 flex justify-center items-center bg-gray-200">
                {/* Tailwind CSS Spinner */}
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            )}
            <img
              src={photo}
              alt={`Room photos ${index + 1}`}
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

export default RoomsPhotos;
