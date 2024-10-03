import React from "react";
import Carousel from "./landing-compo/Craosal";
import Welcome from "./landing-compo/Welcome";
import Facilities from "./landing-compo/Facilities";
import Packages from "./landing-compo/Packages";
import Amenities from "./landing-compo/Amanities";
import Faq from "./landing-compo/Faq";

const Landing = () => {
  return (
    <>
      <Carousel />
      <Welcome />
      <Facilities />
      <Packages />
      <Amenities />
      <Faq />
    </>
  );
};

export default Landing;
