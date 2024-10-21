import React, { useState } from "react";

const PoolAndActivitiesPhotos = () => {
  const photos = [
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5708.webp?alt=media&token=fee9eb99-2026-43ee-9e92-9f237188f1bchttps://example.com/photo1.jpg", // Replace with actual URLs
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5708.webp?alt=media&token=fee9eb99-2026-43ee-9e92-9f237188f1bchttps://example.com/photo1.jpg",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5708.webp?alt=media&token=fee9eb99-2026-43ee-9e92-9f237188f1bchttps://example.com/photo1.jpg",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5708.webp?alt=media&token=fee9eb99-2026-43ee-9e92-9f237188f1bchttps://example.com/photo1.jpg",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5708.webp?alt=media&token=fee9eb99-2026-43ee-9e92-9f237188f1bchttps://example.com/photo1.jpg",
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
