import React from "react";
import Style from "./AdminCafeteria.module.css";
import { HeaderAdminCafeterias } from "../../layouts/layoutsAdminCafeterias/HeaderAdminCafeterias/HeaderAdminCafeterias";
import { Slider } from "../../layouts/slider/Slider";
import { HomeCafeteria } from "../../layouts/layoutsCafeteria/homeCafeteria/HomeCafeteria";
import { CategoriesProducts } from "../../layouts/layoutsCafeteria/CategoriesProducts/CategoriesProducts";
import { FeaturedProducts } from "../../layouts/layoutsCafeteria/featuredproducts/FeaturedProducts";
import { Menu } from "../../layouts/layoutsCafeteria/Menu/Menu";
import { CarProducts } from "../../layouts/layoutsCafeteria/CarProducts/CarProducts";
import { FooterCafeteria } from "../../layouts/layoutsCafeteria/footercafeteria/FooterCafeteria";

export const AdminCafeteria = () => {
  return (
    <>
      <HeaderAdminCafeterias />
      {/* <Slider /> */}
      <HomeCafeteria />
      <CategoriesProducts />
      <FeaturedProducts />
      <Menu />
      {/* <CarProducts /> */}
      <FooterCafeteria />
    </>
  );
};
