import { Route, Routes } from "react-router-dom";
import "./AppMobile.css";

import { Home } from "./componentsMobile/pages/Home/Home";
import { Cafeteria } from "./componentsMobile/pages/Cafeteria/Cafeteria";
import { Cafeterias } from "./componentsMobile/pages/Cafeterias/Cafeterias";

import { AdminCafeteria } from "./componentsMobile/pages/AdminCafeteria/AdminCafeteria";
import { DescripcionCafeteria } from "./componentsMobile/pages/AdminCafeteria/DescripcionCafeteria/DescripcionCafeteria";
import { ProductosCartaCafeteria } from "./componentsMobile/pages/AdminCafeteria/ProductosCartaCafeteria/ProductosCartaCafeteria";
import { ProductosCafeteria } from "./componentsMobile/pages/AdminCafeteria/ProductosCafeteria/ProductosCafeteria";
import { VentasCafeteria } from "./componentsMobile/pages/AdminCafeteria/VentasCafeteria/VentasCafeteria";

import { PageRegistros } from "./componentsMobile/pages/PageRegistros/PageRegistros";
import { User } from "./componentsMobile/layouts/RegistrarCrear/User/User";
import { Cafe } from "./componentsMobile/layouts/RegistrarCrear/Cafe/Cafe";
import { Farm } from "./componentsMobile/layouts/RegistrarCrear/Farm/Farm";

import { Fincas } from "./componentsMobile/pages/Fincas/Fincas";
import { Finca } from "./componentsMobile/pages/Finca/Finca";

export const AppMobile = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Cafeterias" element={ <Cafeterias /> } />
        <Route path="/Cafeterias/cafeteria" element={ <Cafeteria /> } />
        
        <Route path="/AdminCafeteria" element={ <AdminCafeteria /> } />
        <Route path="/AdminCafeteria/DescripcionCafeteria" element={ <DescripcionCafeteria /> } />
        <Route path="/AdminCafeteria/ProductosCarta" element={ <ProductosCartaCafeteria /> } />
        <Route path="/AdminCafeteria/ProductosCafeteria" element={ <ProductosCafeteria /> } />
        <Route path="/AdminCafeteria/VentasCafeteria" element={ <VentasCafeteria /> } />
        
        <Route path="/PageRegistros" element={ <PageRegistros /> } />
        <Route path="/User" element={ <User /> } />
        <Route path="/Cafe" element={ <Cafe /> } />
        <Route path="/Farm" element={ <Farm /> } />

        <Route path="/Fincas" element={ <Fincas />} />
        <Route path="/Fincas/Finca" element={ <Finca/>} />
      </Routes>
    </>
  );
}