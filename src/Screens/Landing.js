import React from "react";
import Carousel from "./landing-compo/Craosal";
import Welcome from "./landing-compo/Welcome";
import Facilities from "./landing-compo/Facilities";
import Packages from "./landing-compo/Packages";
// import Amenities from "./landing-compo/Amenities";
import Faq from "./landing-compo/Faq";
import Testimonial from "./landing-compo/Testimonial";
import GalleryPreview from "./landing-compo/GalleryPreview";

const Landing = () => {
  return (
    <>
      <Carousel />

      <section className="mt-6">
        <Welcome />
      </section>

      <section className="mt-2">
        <Facilities />
      </section>

      <section className="mt-6">
        <Packages />
      </section>

      <section>
        {/* View Menu Section */}
        <div className="my-16 text-center">
          {/* Informative Text */}
          <p className="text-2xl font-bold text-gray-800 mb-6">
            Would you like to explore our delightful resort menu?
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Click the button below to discover the delicious options we have to
            offer!
          </p>

          {/* View Menu Button */}
          <a
            href="https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/New%20Viva%20Fernleaf%20Resort%20Menu-1.pdf?alt=media&token=f4d8c748-7474-4173-99e8-86f856b232aa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white text-lg font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-teal-500 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-opacity-50"
          >
            Food Menu
          </a>
        </div>
      </section>

      <section className="mt-6">
        <GalleryPreview />
      </section>

      <section className="mt-0">
        <Testimonial />
      </section>

      <section className="mt-6 md:mt-0">
        <Faq />
      </section>
    </>
  );
};

export default Landing;
