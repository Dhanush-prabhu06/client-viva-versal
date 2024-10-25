import React, { useState } from "react";

const Menu = () => {
  const photos = [
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Menu%2FWelcome.jpg?alt=media&token=048188fc-8d79-4773-9e7d-3d346add96c4", // Replace with actual URLs
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Menu%2FSoup%20and%20Snacks.jpg?alt=media&token=0ce74d39-e352-4b8e-892f-db6b13399863",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Menu%2FSalad%20and%20Bread.jpg?alt=media&token=9ef90555-4486-44a5-bc63-bd814bf3a787",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Menu%2FVeg%20Starter.jpg?alt=media&token=797a2d89-b0ef-43cd-9bdc-4b34b24f4837",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Menu%2Fveg%20Curry.jpg?alt=media&token=2e277ae8-37da-40b9-99db-be87c99f9fd6",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Menu%2FVeg%20%20Rice.jpg?alt=media&token=71d7a8ab-08eb-47f8-b579-5dc853073618",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Menu%2FNon%20Soup%20and%20Starter.jpg?alt=media&token=047e2a37-92f4-4979-b195-bc52bc43e634",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Menu%2FEgg%20Starter.jpg?alt=media&token=ba9260b3-7b02-4588-8037-0424b9e3beb7",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Menu%2FNon%20Gravy.jpg?alt=media&token=8c73be43-c6fb-49e9-9edd-392aed26b4da",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Menu%2FNon%20Rice%20and%20Icecream.jpg?alt=media&token=9b6e1000-c496-4bf5-872e-ac6b137a05dc",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Menu%2FCool%20Drink.jpg?alt=media&token=ccb116ce-813a-4bc2-b82e-2525f5c07a9f",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Menu%2FBeverages.jpg?alt=media&token=79a67a3a-cccd-468b-91f5-14a1c0286505",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Menu%2FEnd%20Page.jpg?alt=media&token=602dfa23-e401-42e2-9012-977eb8a74aa1",
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
      <h2 className="text-4xl font-bold mb-5 text-center drop-shadow-lg">
        Resort Menu
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
              className={`w-full h-full object-cover transform transition-transform duration-300 ${
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

export default Menu;
