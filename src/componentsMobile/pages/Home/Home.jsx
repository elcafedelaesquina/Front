import React from "react";
import Style from "./home.module.css";
import { NavBar } from "../../layouts/navbar/Navbar";
import { Slider } from "../../layouts/slider/Slider";
import { Footer } from "../../layouts/footer/Footer";

export const Home = () => {
  return (
    <>
      <NavBar />
      <main className={Style.main}>
        <div className={Style.imgInicio}>
          <div className={Style.filter}>
            <div className={Style.content}>
            <h2 className={Style.title}>Crea tu Tienda Virtual con Nosotros</h2>
            <button className={Style.btnStart}>Empieza con Nosotros</button>
            </div>
          </div>
        </div>
        <Slider />
      </main>
      <Footer />
    </>
  );
};
