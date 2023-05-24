import React from "react";
import Style from "./ProductosCartaCafeteria.module.css";
import { HeaderAdminCafeterias } from "../../../layouts/layoutsAdminCafeterias/HeaderAdminCafeterias/HeaderAdminCafeterias";
import { MenuAdminCafeteria } from "../../../layouts/layoutsAdminCafeterias/MenuAdminCafeteria/MenuAdminCafeteria";

export const ProductosCartaCafeteria = () => {
  return (
    <>
      <HeaderAdminCafeterias />
      <main className={Style.main}>
        <MenuAdminCafeteria />
      </main>
    </>
  );
};
