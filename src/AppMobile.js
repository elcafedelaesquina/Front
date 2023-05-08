import './AppMobile.css';
import {Route, Routes } from "react-router-dom";
import { Home } from './componentsMobile/pages/Home/Home';
import { Cafeteria } from './componentsMobile/pages/Cafeteria/Cafeteria';

function AppMobile() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cafeteria' element={<Cafeteria />} />
    </Routes>
    </>
  );
}

export default AppMobile;