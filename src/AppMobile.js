import { Route, Routes } from "react-router-dom";
import "./AppMobile.css";

import { Home } from "./componentsMobile/pages/Home/Home";
import { Cafeteria } from "./componentsMobile/pages/Cafeteria/Cafeteria";
import { Cafeterias } from "./componentsMobile/pages/Cafeterias/Cafeterias";

import { PerfilCafeteria } from "./componentsMobile/pages/AdminCafeteria/PerfilCafeteria/PerfilCafeteria";
import { ProductosCartaCafeteria } from "./componentsMobile/pages/AdminCafeteria/ProductosCartaCafeteria/ProductosCartaCafeteria";
import { ProductosCafeteria } from "./componentsMobile/pages/AdminCafeteria/ProductosCafeteria/ProductosCafeteria";
import { AdministradorCafeteria } from "./componentsMobile/pages/AdminCafeteria/AdministradorCafeteria/AdministradorCafeteria"; 
import { AdminChats } from "./componentsMobile/pages/AdminCafeteria/AdminChats/AdminChats";

import { PageRegistros } from "./componentsMobile/pages/PageRegistros/PageRegistros";
import { User } from "./componentsMobile/layouts/RegistrarCrear/User/User";
import { Cafe } from "./componentsMobile/layouts/RegistrarCrear/Cafe/Cafe";
import { Farm } from "./componentsMobile/layouts/RegistrarCrear/Farm/Farm";

import { AdminFinca } from "./componentsMobile/pages/AdminFinca/AdminFinca";

import { Fincas } from "./componentsMobile/pages/Fincas/Fincas";
import { Finca } from "./componentsMobile/pages/Finca/Finca";


export const AppMobile = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Cafeterias" element={ <Cafeterias /> } />
        <Route path="/Cafeterias/cafeteria" element={ <Cafeteria /> } />

        
        <Route path="/EditarPerfilAdmin" element={ <PerfilCafeteria /> } />
        <Route path="/CreateAdminCafeteria" element={ <AdministradorCafeteria /> } />
        <Route path="/CreateProductsCarta" element={ <ProductosCartaCafeteria /> } />
        <Route path="/CreateProductsCafeteria" element={ <ProductosCafeteria /> } />
        <Route path="/ChatsAdmin" element={ <AdminChats /> } />
        
        
        <Route path="/PageRegistros" element={ <PageRegistros /> } />
        <Route path="/User" element={ <User /> } />
        <Route path="/Cafe" element={ <Cafe /> } />
        <Route path="/Farm" element={ <Farm /> } />

        <Route path="/AdminFinca" element={ <AdminFinca />} />

        <Route path="/Fincas" element={ <Fincas />} />
        <Route path="/Fincas/Finca" element={ <Finca/>} />

      </Routes>
    </>
  );
}