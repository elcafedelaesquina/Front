import React from "react";
import { NavBar } from "../../layouts/navbar/Navbar";
import { Slider } from "../../layouts/slider/Slider";
import { HomeCafeteria } from "../../layouts/layoutsCafeteria/homeCafeteria/HomeCafeteria";
import { CategoriesProducts } from "../../layouts/layoutsCafeteria/CategoriesProducts/CategoriesProducts";
import { FeaturedProducts } from "../../layouts/layoutsCafeteria/featuredproducts/FeaturedProducts";
import { CarProducts } from "../../layouts/layoutsCafeteria/CarProducts/CarProducts";
import { FooterCafeteria } from "../../layouts/layoutsCafeteria/footercafeteria/FooterCafeteria";
import { Menu } from "../../layouts/layoutsCafeteria/Menu/Menu"

export const Cafeteria = () => {
  return (
    <div>
      <NavBar />
      {/* <Slider /> */}
      <HomeCafeteria />
      <CategoriesProducts />
      <FeaturedProducts />
      <Menu />
      <CarProducts />
      <FooterCafeteria />
    </div>
  );
};
