import React from "react";
import Carousel from "./landing-compo/Craosal";
import Welcome from "./landing-compo/Welcome";
import Facilities from "./landing-compo/Facilities";
import Packages from "./landing-compo/Packages";
import Amenities from "./landing-compo/Amanities";
import Faq from "./landing-compo/Faq";
import WA_E from "../components/WA_E";

const Landing = () => {
  return (
    <div>
      <WA_E />
      <Carousel />
      <Welcome />
      <Facilities />
      <Packages />
      <Amenities />
      <Faq />
    </div>
  );
};

export default Landing;
