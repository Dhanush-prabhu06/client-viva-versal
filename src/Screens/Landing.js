import React from "react";
import Carousel from "./landing-compo/Craosal";
import Welcome from "./landing-compo/Welcome";
import Facilities from "./landing-compo/Facilities";
import Packages from "./landing-compo/Packages";
import Amenities from "./landing-compo/Amanities";
import Faq from "./landing-compo/Faq";
import Testimonial from "./landing-compo/Testimonial";

const Landing = () => {
  return (
    <div>
      <Carousel />
      <br />

      <Welcome />

      <Facilities />
      <br />
      <br />
      <Packages />
      <br />
      <br />
      <Testimonial />
      <br />
      <Faq />
    </div>
  );
};

export default Landing;
