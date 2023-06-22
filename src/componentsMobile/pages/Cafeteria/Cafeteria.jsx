import React from "react";
import Style from "./cafeteria.module.css"
import { NavBar } from "../../layouts/navbar/Navbar";
import { HomeCafeteria } from "../../layouts/layoutsCafeteria/homeCafeteria/HomeCafeteria";
import { CategoriesProducts } from "../../layouts/layoutsCafeteria/CategoriesProducts/CategoriesProducts";
import { FeaturedProducts } from "../../layouts/layoutsCafeteria/featuredproducts/FeaturedProducts";
import { CarProducts } from "../../layouts/layoutsCafeteria/CarProducts/CarProducts";
import { Menu } from "../../layouts/layoutsCafeteria/MenuProducts/MenuProducts"
import { FooterCafeteria } from "../../layouts/layoutsCafeteria/footercafeteria/FooterCafeteria";
import { Chat } from "../../layouts/layoutsCafeteria/Chat/Chat";
import { GridProducts } from "../../layouts/layoutsCafeteria/GridProducts/GridProducts";

export const Cafeteria = () => {
  return (
    <div className={Style.containerCafeteria}>
      <NavBar />
      <HomeCafeteria />
      <CategoriesProducts />
      <FeaturedProducts />
      {/* <Chat /> */}
      <FooterCafeteria />
    </div>
  );
};
