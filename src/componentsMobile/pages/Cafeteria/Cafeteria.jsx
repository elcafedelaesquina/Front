import React from "react";
import Style from './cafeteria.module.css'

import { NavBar } from "../../layouts/navbar/Navbar";
import { Slider } from "../../layouts/slider/Slider";
import { HomeCafeteria } from "../../layouts/homeCafeteria/HomeCafeteria";
import { CategoriesProducts } from "../../layouts/CategoriesProducts/CategoriesProducts";
import { FeaturedProducts } from "../../layouts/featuredproducts/FeaturedProducts";
import { CarProducts } from "../../layouts/CarProducts/CarProducts";
import { FooterCafeteria } from "../../layouts/footercafeteria/FooterCafeteria";

export const Cafeteria = () => {
  return (
    <div className={Style.cafeteria}>
      <NavBar />
      <Slider />
      <HomeCafeteria />
      <CategoriesProducts />
      <FeaturedProducts />
      <CarProducts />
      <FooterCafeteria />
    </div>
  );
};
