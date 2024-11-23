import React, { useState } from "react";

const PoolAndActivitiesPhotos = () => {
  const photos = [
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5723.webp?alt=media&token=286e344a-4ad6-4732-b0b5-3179daca541e", // Replace with actual URLs
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5777.webp?alt=media&token=10ed6d0d-becc-4728-88e1-c7db8c00d2d5",
    // "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5770.webp?alt=media&token=8c90ad86-5fb9-4076-affe-15e106f564d5",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FRoap%20Activities%2FIMG_5966.webp?alt=media&token=8fff6ca4-34f9-4b91-9226-1dd814a5d477",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FRoap%20Activities%2Fdhanush%20Photo.webp?alt=media&token=cc744494-9d8c-4ece-b09d-6bfb9a7042ff",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FRoap%20Activities%2FIMG_5830.webp?alt=media&token=6a0d85a9-89e5-43eb-82c0-00a67308c4b4",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FRoap%20Activities%2FIMG_5846.webp?alt=media&token=bba7b2ca-4464-4a50-84c4-ca4c1d411a21",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FRoap%20Activities%2FIMG_5947.webp?alt=media&token=e9bedfb1-ea3f-4f33-85df-fd5ef738fae1",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FRoap%20Activities%2FIMG_5831.webp?alt=media&token=04fa6117-4d21-40a2-b0a0-4d8880940d74",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FRoap%20Activities%2FIMG_5842.webp?alt=media&token=5b4a10b8-a34a-4b96-991f-1a7a6b6890f9",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FRoap%20Activities%2FIMG_5864.webp?alt=media&token=70b4c9e8-718d-45f0-8aa1-f51101263e07",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FRoap%20Activities%2FIMG_5845.webp?alt=media&token=488e0604-d74f-4f77-b107-93536674d763",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FRoap%20Activities%2FIMG_5853.webp?alt=media&token=ca467191-7539-40bb-97c7-2dda5140838e",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FRoap%20Activities%2FIMG_5861.webp?alt=media&token=3de4bc3b-5d1d-4205-b4c3-64bf9998f077",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FRoap%20Activities%2FIMG_5922.webp?alt=media&token=cb30bad1-fb13-4c10-82db-2a96d40a4e89",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FRoap%20Activities%2FIMG_5943.webp?alt=media&token=0883cc28-bddb-49bc-ac00-7fe3dd17166a",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FRoap%20Activities%2FIMG_5899.webp?alt=media&token=0f883407-ff45-478a-897a-7fe7f4b405aa",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FRoap%20Activities%2FIMG_5955.webp?alt=media&token=7e7543b2-74fe-4933-acaf-6c1a015425c6",
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
