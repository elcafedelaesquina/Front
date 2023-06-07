import React from "react";
import Style from './finca.module.css';
import { NavBar } from "../../layouts/navbar/Navbar";
import { Slider } from "../../layouts/slider/Slider";
import { HomeFinca } from "../../layouts/layoutFinca/homeFinca/HomeFinca";
import {FeaturedServices} from "../../layouts/layoutFinca/featuredServices/FeaturedServices"
import { FooterFinca } from "../../layouts/layoutFinca/footerFinca/FooterFinca";
import { CategoriesServices } from "../../layouts/layoutFinca/categoriesServices/CategoriesServices";

export const Finca = () => {
  return (
    <div className={Style.containerFinca}>
      <NavBar />
      <Slider />
      <HomeFinca />
      <CategoriesServices />
      <FeaturedServices />
      <FooterFinca />
    </div>
  );
};
