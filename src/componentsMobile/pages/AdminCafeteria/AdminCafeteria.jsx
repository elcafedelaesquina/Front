import React from "react";
import { HeaderAdminCafeterias } from "../../layouts/layoutsAdminCafeterias/HeaderAdminCafeterias/HeaderAdminCafeterias";
import { HomeCafeteria } from "../../layouts/layoutsCafeteria/homeCafeteria/HomeCafeteria";
import { CategoriesProducts } from "../../layouts/layoutsCafeteria/CategoriesProducts/CategoriesProducts";
import { FeaturedProducts } from "../../layouts/layoutsCafeteria/featuredproducts/FeaturedProducts";
import { MenuProducts } from "../../layouts/layoutsCafeteria/MenuProducts/MenuProducts";
import { FooterCafeteria } from "../../layouts/layoutsCafeteria/footercafeteria/FooterCafeteria";

export const AdminCafeteria = () => {
  return (
    <>
      <HeaderAdminCafeterias />
      <HomeCafeteria />
      <CategoriesProducts />
      <FeaturedProducts />
      <MenuProducts />
      <FooterCafeteria />
    </>
  );
};
