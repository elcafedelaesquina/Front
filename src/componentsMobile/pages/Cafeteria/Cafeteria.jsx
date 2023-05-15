import React from "react";
import Style from './cafeteria.module.css'
import { AboutUs } from "../../layouts/AboutUs/AboutUs";
import { CarProducts } from "../../layouts/CarProducts/CarProducts";
import { CategoriesProducts } from "../../layouts/CategoriesProducts/CategoriesProducts";
import { Footer } from "../../layouts/footer/Footer";
import { Menu } from "../../layouts/Menu/Menu";
import { NavBar } from "../../layouts/navbar/Navbar";
import { Slider } from "../../layouts/slider/Slider";
import { HomeCafeteria } from "../../layouts/homeCafeteria/HomeCafeteria";

export const Cafeteria = () => {
  return (
    <div className={Style.cafeteria}>
      <NavBar />
      <Slider />
      <HomeCafeteria />
      <CategoriesProducts />
      <Menu />
      <AboutUs />
      <CarProducts />
      <Footer />
    </div>
  );
};
