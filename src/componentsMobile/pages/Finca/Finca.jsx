import React from "react";
import { NavBar } from "../../layouts/navbar/Navbar";
import { Slider } from "../../layouts/slider/Slider";
import { HomeFinca } from "../../layouts/layoutFinca/homeFinca/HomeFinca";
import { FeaturedServices } from "../../layouts/layoutFinca/featuredServices/FeaturedServices";
import { FooterFinca } from "../../layouts/layoutFinca/footerFinca/FooterFinca";

export const Finca = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <HomeFinca />
      <FeaturedServices />
      <FooterFinca />
    </div>
  );
};
