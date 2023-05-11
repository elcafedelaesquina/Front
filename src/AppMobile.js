import "./AppMobile.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./componentsMobile/pages/Home/Home";
import { Cafeteria } from "./componentsMobile/pages/Cafeteria/Cafeteria";
import { PageRegistros } from "./components/pages/PageRegistros/PageRegistros";
import { User } from "./components/layouts/RegistrarCrear/User/User";
import { Cafe } from "./components/layouts/RegistrarCrear/Cafe/Cafe";
import { Farm } from "./components/layouts/RegistrarCrear/Farm/Farm";

function AppMobile() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Cafeteria" element={ <Cafeteria /> } />
        <Route path="/PageRegistros" element={ <PageRegistros /> } />
        <Route path="/User" element={ <User /> } />
        <Route path="/Cafe" element={ <Cafe /> } />
        <Route path="/Farm" element={ <Farm /> } />
      </Routes>
    </>
  );
}

export default AppMobile;
