import React from "react";
import Style from "./AdminFinca.module.css";
import { HeaderAdminFincas } from "../../layouts/layoutsAdminFincas/HeaderAdminFincas/HeaderAdminFincas";
import { HomeFinca } from "../../layouts/layoutFinca/homeFinca/HomeFinca"
import { CategoriesServices } from "../../layouts/layoutFinca/categoriesServices/CategoriesServices";
import { FeaturedProducts } from "../../layouts/layoutsCafeteria/featuredproducts/FeaturedProducts";
import { FooterFinca } from "../../layouts/layoutFinca/footerFinca/FooterFinca"

export const AdminFinca = () => {
  return (
    <div className={Style.container}>
      <HeaderAdminFincas />
      <HomeFinca />
      <CategoriesServices />
      <FeaturedProducts />
      <FooterFinca />
    </div>
  );
};
