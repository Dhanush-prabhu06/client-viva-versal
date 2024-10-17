import React from "react";
import { useNavigate } from "react-router-dom";
import GalleryCard from "./GalleryCard";

const GallerySection = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Resort photos",
      backgroundImage:
        "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5708.webp?alt=media&token=fee9eb99-2026-43ee-9e92-9f237188f1bc",
      route: "/gallery/ResortPhotos",
    },
    {
      title: "Rooms",
      backgroundImage:
        "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC1%2FIMG_5730.webp?alt=media&token=75952d2d-ca3f-4e70-857a-42361ebab9f7",
      route: "/gallery/RoomsPhotos",
    },
    {
      title: "Pool and activities",
      backgroundImage:
        "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5723.webp?alt=media&token=286e344a-4ad6-4732-b0b5-3179daca541e",
      route: "/gallery/PoolAndActivitiesPhotos",
    },
    {
      title: "All Photos",
      backgroundImage:
        "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/welcome%2FIMG_5774.webp?alt=media&token=8a119872-ea54-4820-8344-8e1f8e996342",
      route: "/GallerySection",
    },
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Use grid for responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {categories.map((category) => (
          <GalleryCard
            key={category.title}
            title={category.title}
            backgroundImage={category.backgroundImage}
            onClick={() => handleCardClick(category.route)}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
