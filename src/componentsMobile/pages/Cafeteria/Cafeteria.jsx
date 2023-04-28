import React from "react";
import { AboutUs } from "../../layouts/AboutUs/AboutUs";
import { CarProducts } from "../../layouts/CarProducts/CarProducts";
import { CategoriesProducts } from "../../layouts/CategoriesProducts/CategoriesProducts";
import { Footer } from "../../layouts/footer/Footer";
import { Menu } from "../../layouts/Menu/Menu";
import { NavBar } from "../../layouts/navbar/Navbar";
import { Slider } from "../../layouts/slider/Slider";

export const Cafeteria = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <CategoriesProducts />
      <Menu />
      <AboutUs />
      <CarProducts />
      <Footer />
    </div>
  );
};
