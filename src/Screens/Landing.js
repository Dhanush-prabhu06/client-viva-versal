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

      <section className="mt-6">
        <GalleryPreview />
      </section>

      <section className="mt-6">
        <Testimonial />
      </section>

      <section className="mt-6">
        <Faq />
      </section>
    </>
  );
};

export default Landing;
