import React from "react";
import { NavBar } from "../../layouts/navbar/Navbar";
import { Slider } from "../../layouts/slider/Slider";
import { HomeCafeteria } from "../../layouts/homeCafeteria/HomeCafeteria";
import { CategoriesProducts } from "../../layouts/CategoriesProducts/CategoriesProducts";
import { FeaturedProducts } from "../../layouts/featuredproducts/FeaturedProducts";
import { CarProducts } from "../../layouts/CarProducts/CarProducts";
import { FooterCafeteria } from "../../layouts/footercafeteria/FooterCafeteria";
import { Menu } from "../../layouts/Menu/Menu"

export const Cafeteria = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <HomeCafeteria />
      <CategoriesProducts />
      <FeaturedProducts />
      <Menu />
      <CarProducts />
      <FooterCafeteria />
    </div>
  );
};
