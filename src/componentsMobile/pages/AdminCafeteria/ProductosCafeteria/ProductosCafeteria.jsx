import React, { useEffect, useState } from "react";
import Style from "./ProductosCafeteria.module.css";
import { HeaderAdminCafeterias } from "../../../layouts/layoutsAdminCafeterias/HeaderAdminCafeterias/HeaderAdminCafeterias";
import { CardProductosAdmin } from "../../../layouts/layoutsAdminCafeterias/CardProductosAdmin/CardProductosAdmin";

export const ProductosCafeteria = () => {
  return (
    <>
      <HeaderAdminCafeterias />
      <main className={Style.main}>
        <CardProductosAdmin />
      </main>
    </>
  );
};
