import React, { useState } from "react";

// Spinner component using Tailwind CSS
// const Spinner = () => (
//   <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-solid border-gray-200"></div>
// );

// Reusable component for rendering each gallery image with a zoom-in effect
const GalleryItem = ({ src, alt, extraClasses = "" }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div
      className={`grid-item md:large-item ${extraClasses} relative overflow-hidden`}
    >
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-200 z-10">
          Loading... {/* Spinner displayed while image is loading */}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transform transition-transform duration-500 ${
          isLoading ? "hidden" : "block"
        } hover:scale-105 rounded-md hover:rounded-lg`} // Added hover zoom effect
        onLoad={handleImageLoaded}
      />
    </div>
  );
};

const Galary = () => {
  const images = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5723.webp?alt=media&token=286e344a-4ad6-4732-b0b5-3179daca541e",
      alt: "Gallery Image 1",
      extraClasses: "col-span-1 md:col-span-2 md:row-span-2 ",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5777.webp?alt=media&token=10ed6d0d-becc-4728-88e1-c7db8c00d2d5",
      alt: "Gallery Image 2",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5708.webp?alt=media&token=fee9eb99-2026-43ee-9e92-9f237188f1bc",
      alt: "Gallery Image 3",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5770.webp?alt=media&token=8c90ad86-5fb9-4076-affe-15e106f564d5",
      alt: "Gallery Image 4",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5779.webp?alt=media&token=ec7ef6e5-76e0-48dc-9eb7-8bcf4cfec0cd",
      alt: "Gallery Image 5",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC1%2FIMG_5733.webp?alt=media&token=daa2d8bc-5d24-46ea-95ec-19d087fb1298",
      alt: "Gallery Image 6",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC1%2FIMG_5736.webp?alt=media&token=7ffd50fc-be12-41c5-bc47-957eba9b66fc",
      alt: "Gallery Image 7",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC1%2FIMG_5730.webp?alt=media&token=75952d2d-ca3f-4e70-857a-42361ebab9f7",
      alt: "Gallery Image 8",
      extraClasses: "col-span-1 md:col-span-2 md:row-span-2 ",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC1%2FIMG_5739.webp?alt=media&token=d3d04860-f419-4096-b193-35afb2240b30",
      alt: "Gallery Image 9",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC1%2FIMG_5747.webp?alt=media&token=3f9ae479-59be-44a7-965d-58bd4dd03ffa",
      alt: "Gallery Image 10",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC2%2FIMG_5755.webp?alt=media&token=39aea903-72d9-45d8-a5da-6a2974e32151",
      alt: "Gallery Image 11",
      extraClasses: "col-span-1 md:col-span-2 md:row-span-2",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC2%2FIMG_5751.webp?alt=media&token=b3316e41-e492-46d9-b47e-7f45761e714a",
      alt: "Gallery Image 12",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC2%2FIMG_5764.webp?alt=media&token=a9f9804e-d90f-4e10-9df9-38b10ce4a027",
      alt: "Gallery Image 13",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/welcome%2FIMG_5774.webp?alt=media&token=8a119872-ea54-4820-8344-8e1f8e996342",
      alt: "Gallery Image 14",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FAC1%2FIMG_5736.webp?alt=media&token=7ffd50fc-be12-41c5-bc47-957eba9b66fc",
      alt: "Gallery Image 15",
    },
  ];

  return (
    <>
      <div>
        <br />
        <div className="text-center mb-1 text-yellow-600 tracking-widest">
          GALLERY
        </div>

        <div className="text-3xl text-center">Some Of Our Photo Galleries</div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 ">
          {images.map(({ src, alt, extraClasses }, index) => (
            <GalleryItem
              key={index}
              src={src}
              alt={alt}
              extraClasses={extraClasses}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Galary;
