import React from "react";

const ResortPhotos = () => {
  const photos = [
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5708.webp?alt=media&token=fee9eb99-2026-43ee-9e92-9f237188f1bchttps://example.com/photo1.jpg", // Replace with actual URLs
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5708.webp?alt=media&token=fee9eb99-2026-43ee-9e92-9f237188f1bchttps://example.com/photo1.jpg",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5708.webp?alt=media&token=fee9eb99-2026-43ee-9e92-9f237188f1bchttps://example.com/photo1.jpg",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5708.webp?alt=media&token=fee9eb99-2026-43ee-9e92-9f237188f1bchttps://example.com/photo1.jpg",
    "https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/Gallary%2FIMG_5708.webp?alt=media&token=fee9eb99-2026-43ee-9e92-9f237188f1bchttps://example.com/photo1.jpg",
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Resort Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={photo}
              alt={`Resort photo ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResortPhotos;
